import { Http, Response, Request } from '@angular/http';

import {
  Output,
  EventEmitter,
  Input,
  Component
} from '@angular/core'
import { AppData } from "./AppData"
import { string as rjonTester } from "./templates/rjon-tester.pug"
import { Tester } from "./rjon/rjonTester"
import { fxArray } from "./rjon/prefx"

@Component({
  selector:'rjon-tester',
  template:rjonTester,
  animations:fxArray
}) export class RjonTester{
  error
  testlog = []
  testing:boolean = false
  //testResults = []
  hostModel
  testGroup
  myTester = new Tester()
  testGroups = []
  
  @Input() testRoutes = []
  @Output() testRoutesChange = new EventEmitter()
  
  @Input() actualRoutes = []
  @Output() actualRoutesChange = new EventEmitter()
  
  @Input() actualTestRoutes = []
  @Output() actualTestRoutesChange = new EventEmitter()

  @Input() hostModelChange = new EventEmitter()

  @Input() ref
  @Output() refChange = new EventEmitter()

  constructor(public AppData:AppData, public http:Http){
    this.myTester.log = options=>this.testlog.push(options)

    this.myTester.requestSampleRoute = (sample, route, options)=>{
      options = options || {}
      options.host = options.host || 'localhost'

      const simplePath = Tester.getRouteSamplePath(route, sample)
      const protocol = this.hostModel.protcol || (this.hostModel.port==443?'https':'http')
      const url = protocol + '://'+this.hostModel.hostname+':'+this.hostModel.port + simplePath
      const reqops = {
        method : route.method || 'GET',
        body: sample.request || sample.post,
        headers: options.headers
      }

      //send request
      return this.http.request(url, reqops).toPromise()
      .then(response=>this.parseResponse(response))
      .catch( response=>Promise.reject(this.parseResponse(response)) )
    }

  }

  ngAfterViewInit(){
    setTimeout(()=>this.remember(), 0)
  }

  remember(){
    if(this.ref){
      ["error","testlog","hostModel","testGroup","testGroups"].forEach(x=>this[x]=this.ref[x])
    }

    this.refChange.emit(this.ref)
  }

  parseResponse(response){
    if(response['data'])return response

    if( response.headers.get('Content-Type')=='application/json' ){
      try{
        response['data'] = JSON.parse( response.body || response._body )
      }catch(e){}
    }

    return response
  }

  ngOnInit(){
    return this.AppData.load.then(()=>{
      if(!this.AppData.rjon || !this.AppData.rjon.routes)return
      //routes with tests
      this.testRoutes = Tester.getRouteTests( this.AppData.rjon.routes )
      this.testGroups = Tester.getTestGroups( this.AppData.rjon.routes )
    
      this.filterRoutes()

      this.testRoutesChange.emit(this.testRoutes)
      this.actualRoutesChange.emit(this.actualTestRoutes)


      this.hostModel = this.getDefaultHostModel()
    })
  }

  filterRoutes(){
    const routes = Tester.getRoutesWithActualTests( this.AppData.rjon.routes )
    this.reduceRoutesByGroup(routes, this.testGroup)
    this.actualTestRoutesChange.emit(this.actualRoutes=routes)
    this.actualTestRoutes = Tester.getRouteActualTests( routes )
  }

  getDefaultHostModel(){
    if(this.hostModel)return this.hostModel
    
    if(this.AppData.rjon.hosts && this.AppData.rjon.hosts.length){
      return this.AppData.rjon.hosts[0]
    }
  }

  setHostByIndex(index){
    this.hostModel = this.AppData.rjon.hosts[index]
    this.hostModelChange.emit(this.hostModel)
  }

  runTest(){
    if(this.testing)return

    this.testlog.length = 0
    this.testing = true
    const options = {...this.hostModel, headers:this.AppData.rjon.headers}

    return this.myTester.testRoutes(this.actualRoutes, options)
    //.then( results=>this.testResults=results )
    //.then( results=>console.log('results',results) )
    .catch( e=>console.log(this.error=e) )
    .then( ()=>this.testing=false )
  }

  reduceRoutesByGroup(routes, group){
    if(!group)return routes

    for(let x=routes.length-1; x >= 0; --x){
      if(!routes[x].groupNames){
        routes.splice(x,1)
        continue
      }

      if(routes[x].groupNames.indexOf(this.testGroup)<0){
        routes.splice(x,1)
      }
    }

    return routes
  }
}
