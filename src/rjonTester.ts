//import 'rxjs/add/operator/toPromise';
import { array } from "ack-angular/pipes.class"
import { ack } from "ack-x/index-browser"

//const icons = {check:'✓'}

export interface routeConfig{
  port:number|string,
  host:string,
  headers:{}
}

function AssertionError(message){
  this.name = this.constructor.name;
  this.message = message
}
AssertionError.prototype = Object.create(Error.prototype)

const assert = {
  equal:function(a,b,message?){
    if(a==b)return
    throw message ? new AssertionError(message) : new AssertionError(a+' == '+b)
  }
}

/*if (process.platform === 'win32') {
  icons.check = '\u221A';
}*/

export class Tester{
  //public requestSampleRoute:any

  log(options){
    options = options || {}
    switch(options.type){
      case 'success':
        options.message = '\x1b[32m' + options.message + '\x1b[0m'
        break

      case 'error':
        options.message = '\x1b[31m' + options.message + '\x1b[0m'
        break

      case 'info':
        options.message = '\x1b[36m' + options.message + '\x1b[0m'
        break
    }
    console.log.apply(console, options.message)
  }

  /**
    @options{
      port - what port to conduct test on
      method - limit tests to only matching methods
      host - server address
    }
  */
  testRoutes(routes, options:routeConfig){
    const passing = []
    const failing = []
    const errs = []
    //let successCount = 0

    const processTestError = (test,err)=>{
      const msg = errs.length+') '+test.name
      errs.push({msg:msg, error:err})
      this.log({type:'error', message:msg})
      return err
    }

    const processTest = (test,err)=>{
      if(err){
        failing.push(test)
        return processTestError(test,err)
      }

      //++successCount

      /*let msg = test.name
      if(test.time>75){
        msg += ' ('+test.time+'ms)'
      }else if(test.time>37){
        msg += ' ('+test.time+'ms)'
      }*/

      this.log({type:'success', message:test.name, test})
      passing.push(test)
    }

    const tests = []
    let onlyArray = []
    routes.forEach(route=>{
      if(!route.sample)return

      const routeTests = array(route.sample).map(sample=>this.mapSample(sample,route,options))
      tests.push.apply(tests, routeTests)
    })

    for(let x=tests.length-1; x >= 0; --x){
      let testMeta = tests[x]

      if(!testMeta){
        tests.splice(x, 1)
        continue
      }

      if(testMeta.sample.test.only){
        onlyArray.unshift(testMeta)
      }
    }

    const runs = onlyArray.length ? onlyArray : tests

    return this.runTestCases(runs, processTest)
    .then(()=>this.processRanCases(passing, failing, errs))
    //.catch(e=>console.error(e))
  }

  processRanCases(passing, failing, errs){
    this.log({type:'success', message:passing.length+' passing'})
    if(errs.length){
      this.log({type:'error', message:errs.length+' failing'})

      errs.forEach(err=>this.logCaseError(err))
    }
    return {passing:passing, failing:failing}
  }

  logCaseError(err){
    this.log({type:'error', message:err.msg, error:err})

    const response = err.error || err
    const data = response.data || response//try parsed json ELSE error is response
    const resErr = data.error || data//try response body for error ELSE error is body
 
    if(resErr.message){        
      this.log({type:'error', message:resErr.message})
      if(resErr.stack && !resErr.isTimeoutError){
        this.log({type:'error', message:resErr.stack})
      }
    }
  }

  runTestCase(test){
    const startTime = Date.now()
    return test.test()
    .then( x=>(test.time=Date.now()-startTime) && x )
  }

  promiseTestCase(test, processTest){
    if(test.sample.test.skip){
      this.log({type:'info', message:'skipped '+test.name, test:{time:0}})
      return
    }

    return Promise.resolve( this.runTestCase(test) )
    .catch(err=>err)
    .then(err=>processTest(test,err))
  }

  runTestCases(tests, processTest){
    let promise = Promise.resolve()

    tests.forEach(test=>{
      promise = promise.then(()=>this.promiseTestCase(test, processTest))
    })
    
    return promise
  }

  //HOLD ONTO
  /*ackRequestSampleRoute(sample, route, options){
    options = options || {}
    options.host = options.host || 'localhost'

    const simplePath = this.getRouteSamplePath(route, sample)

    const req = ack.req()

    if(sample.post){
      req.postVar(sample.post)
    }

    if(route.method){
      req.method(route.method)
    }

    if(sample.request){
      req.json(result)
    }

    const urlPath = 'http://'+options.host+':'+options.port + simplePath

    //send request
    return req.send(urlPath,{spread:false})
    .then(this.testRouteSampleResponse(route,sample))
  }*/

  requestSampleRoute(sample,route,options){
    throw new Error('Expected requestSampleRoute override')
  }

  /**
    @options{
      port - what port to conduct test on
      method - limit tests to only matching methods
      host - server address
    }
  */
  getTestBySampleRoute(sample,route,options){
    if(sample.response){
      //foo request by sample.response
      return () => ({
        fooResponse:true,
        statusCode:200,
        headers:{
          "content-type":"application/json",
          ...options.headers
        },
        body:JSON.stringify(sample.response)
      })
    }

    return () => {
      const timeout = sample.test.timeout || 2000
      const promise = this.requestSampleRoute(sample, route, options)//ignite
      const callback = this.callbackTimeout(promise, timeout)//wrap in timeout

      return ack.promise().callback( callback )//will resolve or timeout or error
      .then( this.testRouteSampleResponse(route,sample) )
    }
  }

  testRouteSampleResponse(route,sample){
    //const simplePath = Tester.getRouteSamplePath(route, sample)

    return function(res){
      var body = res.body
      let contentType = ''
      const promises = []

      //see if json
      for(var key in res.headers){
        if(key.toLowerCase()==='content-type'){
          contentType = res.headers[key]
          break;
        }
      }

      //const method = (route.method || 'GET').toUpperCase()
      const isParseBody = !sample.request

      if(sample.test.cases){
        const cases = sample.test.cases.constructor==Array ? sample.test.cases : [sample.test.cases]
        promises.push( this.testCases(cases,res) )
      }

      if(isParseBody && contentType.search(/application\/json/i)>=0){
        body = JSON.parse(body)
      }

      if(route.returnType){
        const returnType = route.returnType.toLowerCase()
        switch(returnType){
          case 'array':
            assert.equal(body.constructor, Array, 'returnType mismatch. Expected:Array Received:'+body.constructor)
            break;

          case 'string':
          case 'number':
          case 'boolean':
          case 'object':
            assert.equal(typeof(body), returnType, 'returnType mismatch. Expected:'+returnType+' Received:'+typeof(body))
            break;

          default:
            const contentTypeMatch = contentType.search(returnType)>=0
            assert.equal(contentTypeMatch, true, 'returnType mismatch. Expected:'+returnType+' Received:'+contentType)
        }
      }

      const statusCode = sample.test.statusCode || 200
      const resStatus = res.status || res.statusCode

      assert.equal(resStatus, statusCode)

      return Promise.all( promises ).then(()=>{})
    }
  }

  testCases(cases, res){
    const promises = []
    for(let index=0; index < cases.length; ++index){
      promises.push( cases[index](res, assert) )
    }

    return Promise.all(promises)
  }

  callbackTimeout(promise,timeout){
    return function(callback){
      const killCallback = function(err,x?){
        callback(err,x)
        callback = function(){}//all future calls will become ignored
      }

      setTimeout(function(){
        const err = new Error('Error: Timeout of '+timeout+'ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.')
        err['isTimeoutError'] = true
        killCallback(err)
      }, timeout)

      Promise.resolve(promise)
      .then(x=>killCallback(null,x))
      .catch(e=>killCallback(e))
    }
  }

  mapSample(sample, route, options){
    const test = this.getTestBySampleRoute(sample,route,options)
    const simplePath = Tester.getRouteSamplePath(route, sample)
    //const itsName = (route.method||'GET')+':'+options.port+simplePath
    const itsName = (route.method||'GET')+':'+simplePath

    if(!sample.test)return;

    if(options.method && route.method!=options.method){
      return;
    }

    return {test:test, name:itsName, sample:sample}
  }

  public static getRouteSamplePath(route,sample:{path:string,params:any}={path:null,params:null}){
    let simplePath = sample.path || route.path
    if(sample.params){
      for(var key in sample.params){
        let regX = new RegExp(':'+key, 'gi')
        simplePath = simplePath.replace(regX, sample.params[key])
      }
    }
    return simplePath
  }

  public static getRouteActualTests(routes){
    let onlyMode = false
    const tests = []
    Tester.getRouteTests(routes).forEach(test=>{
      if(test.only){
        onlyMode = true
        return tests.push(test)
      }
      if(onlyMode || test.skip)return

      tests.push(test)
    })
    return tests
  }

  public static getRouteTests(routes){
    const tests = []
    routes.forEach(route=>{
      array(route.sample).forEach(sample=>{
        if(sample.test)tests.push(sample.test)
      })
    })
    return tests
  }

  public static getTestGroups(routes){
    const groups = []
    routes.forEach(route=>{
      if(route.groupNames)groups.push.apply(groups,route.groupNames)
    })

    //remove duplicate groups
    //let find = -1
    for(let x=groups.length-1; x >= 0; --x){
      //remove duplicates that appear before current
      while( (find=>find>=0 && find<x)( groups.indexOf(groups[x]) ) ){
        groups.splice(x, 1)
      }
    }

    return groups
  }

  public static getRoutesWithTests(routes){
    const tests = []
    routes.forEach(route=>{
      array(route.sample).forEach(sample=>{
        if(sample.test)tests.push(route)
      })
    })
    return tests
  }

  public static getRoutesWithActualTests(routes){
    let onlyMode = false
    const tests = []
    Tester.getRoutesWithTests(routes).forEach(route=>{
      array(route.sample).forEach(sample=>{
        if(!sample.test)return

        if(sample.test.only){
          onlyMode = true
          return tests.push(route)
        }
        if(onlyMode || sample.test.skip)return

        tests.push(route)
      })
    })
    return tests
  }
}