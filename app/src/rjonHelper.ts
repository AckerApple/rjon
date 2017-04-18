export { statIconMap } from "./statIconMap"
import { statIconMap } from "./statIconMap"
import { pipes } from "ack-angular/pipes.class"

export function serverUrlByRoute(host, route, sample){
  var routePath = route.path

  if(sample){
    if(sample.path){
      routePath = sample.path
    }

    if(sample.params){
      var params = sample.params
      for(var sampleParamKey in params){
        var rx = new RegExp(':'+sampleParamKey, 'gi')
        routePath = routePath.replace(rx, params[sampleParamKey])
      }
    }

    if(sample.query){
      var query = sample.query
      routePath += '?'
      for(var queryKey in query){
        routePath += queryKey+'='+query[queryKey] + '&'
      }

      //remove last &
      routePath = routePath.substring(0, routePath.length-1)
    }
  }

  const port = host.port || 80
  const address = 'http://'+host.hostname+':'+port
  const sep = routePath.substring(0, 1) == '/' ? '' : '/'
  return address+sep+routePath
}

export function defToArray(sample){
  const samples = sample && sample.constructor==Function ? sample() : (sample||[])
  return samples.constructor == Array ? samples : [samples]  
}

export function rjonSampleDefToArray(sample){
  return defToArray(sample)
}

export function rjonToMarkdown(rjon){
  rjon = rjon || {}
  rjon.hosts = rjon.hosts || []
  rjon.routes = rjon.routes || []
  const largeSamples = []

  let output = '### Table of Hosts\n'+
  '| HOSTNAME | PORT |\n'+
  '| --- | --- |\n'

  for(let x=0; x < rjon.hosts.length; ++x){
    let host = rjon.hosts[x]
    output += `| ${host.hostname} | ${host.port} |\n`
  }
  output += '\n'

  output += '### Table of Routes\n'+
  '| METHOD | ROUTE | RETURNS | STAT |\n'+
  '| --- | --- | --- | --- |\n'

  let route:{path:string, method:string, returnType:string, status:any, details:string, sample:any}
  for(let x=0; x < rjon.routes.length; ++x){
    route = rjon.routes[x]
    let link = pipes.markdownAnchor(route.method+' '+route.path)

    output += `| ${route.method} | [${route.path}](#${link}) | ${route.returnType||''} | `

    if(route.status){
      if(route.status.forEach){
        route.status.forEach(status=>
          output += statIconMap[status].icon ? statIconMap[status].icon : status
        )
      }else{
        output += statIconMap[route.status].icon ? statIconMap[route.status].icon : route.status
      }
    }
    output += '|\n'
  }

  output += '\n\n'
  output += '## Route Definitions\n\n'

  for(let xRoute=0; xRoute < rjon.routes.length; ++xRoute){
    route = rjon.routes[xRoute]
    output += `### ${ route.method+' '+route.path }\n`

    if( route.status ){
      if(route.status.forEach){
        route.status.forEach(status=>
          output += '- ' + statIconMap[status].icon ? statIconMap[status].icon : status + '\n'
        )
      }else{
        output += '- ' + statIconMap[route.status].icon ? statIconMap[route.status].icon : route.status + '\n'
      }
    }

    //if(route.method)output += `- method: ${ route.method }\n`
    if(route.returnType)output += `- return-type: ${ route.returnType }\n`
    if(route.details)output += `- ${ route.details }\n`

    let sampler = rjonSampleDefToArray(route.sample)
    rjon.hosts.forEach(host=>{
      sampler.forEach(sample=>{
        const action = serverUrlByRoute(host, route, sample)
        output += `- [${host.hostname}](${action})\n`
      })
    })

    sampler.forEach(sample=>{
      if(sample.test){
        const tests = defToArray(sample.test)
        tests.forEach((test,i)=>{
          const testLabel = 'Sample Test '+i+': ' + route.method+': '+route.path
          const responseTestName = pipes.markdownAnchor(testLabel)
          output += `- Sample: [test](#${responseTestName})\n`
          let string = `- Expects statusCode: ${test.statusCode}\n`
          string += '- Request Body:\n```javascript\n'+JSON.stringify(test.body, null, 2)+'\n```\n'
          largeSamples.push({
            label  : testLabel,
            route  : route,
            string : string
          })
        })
      }

      if(sample.response){
        const responseLabel = 'Sample Response: ' + route.method+': '+route.path
        const responseSampleName = pipes.markdownAnchor(responseLabel)
        output += `- Sample: [response](#${responseSampleName})\n`
        largeSamples.push({
          label  : responseLabel,
          route  : route,
          string : '```javascript\n'+JSON.stringify(sample.response, null, 2)+'\n```\n',
        })
      }

      if(sample.request){
        const requestLabel = 'Sample Request: ' + route.method+': '+route.path
        const requestSampleName = pipes.markdownAnchor(requestLabel)
        output += `- Sample: [request](#${requestSampleName})\n`
        largeSamples.push({
          label  : requestLabel,
          route  : route,
          string : '```javascript\n'+JSON.stringify(sample.request, null, 2)+'\n```\n',
        })
      }
    })

    output += '\n'
  }

  if(largeSamples.length){
    output += '## Request Response Samples\n\n'
    for(let xSample=0; xSample < largeSamples.length; ++xSample){
      let sample = largeSamples[xSample]
      output += `### ${sample.label}\n`
      output += sample.string
      output += '```\n\n'
    }
  }

  output += `\n\n`
  output += `[back to top](#table-of-contents)`

  if(largeSamples.length){
    output = "- [Request Response Samples](#request-response-samples)\n\n" + output
  }else{
    output = "\n\n" + output
  }

  output = '### Table of Contents\n'+
  '- [Table of Hosts](#table-of-hosts)\n'+
  '- [Table of Routes](#table-of-routes)\n'+
  '- [Route Definitions](#route-definitions)\n' + output
  
  return output
}