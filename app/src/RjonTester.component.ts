import { Http, Response, Request } from '@angular/http';

import {
  Output,
  EventEmitter,
  Input,
  Component
} from '@angular/core'
import { AppData } from "./AppData"
import { string as rjonTester } from "./templates/rjon-tester.pug"
import { Tester } from "./rjonTester"
import { fxArray } from "./prefx"


@Component({
  selector:'rjon-tester',
  template:rjonTester,
  animations:fxArray
}) export class RjonTester{
  public error
  public testlog = []
  public testing:boolean = false
  //public testResults = []
  public hostModel
  public myTester = new Tester()
  
  @Input() public testRoutes = []
  @Output() public testRoutesChange = new EventEmitter()
  
  @Input() public actualRoutes = []
  @Output() public actualRoutesChange = new EventEmitter()
  
  @Input() public actualTestRoutes = []
  @Output() public actualTestRoutesChange = new EventEmitter()

  @Input() public hostModelChange = new EventEmitter()

  @Input() public ref
  @Output() public refChange = new EventEmitter()

  constructor(public AppData:AppData, public http:Http){
    this.myTester.log = options=>this.testlog.push(options)

    this.myTester.requestSampleRoute = (sample, route, options)=>{
      options = options || {}
      options.host = options.host || 'localhost'

      const simplePath = Tester.getRouteSamplePath(route, sample)
      const protocol = this.hostModel.protcol || 'http'
      const url = protocol + '://'+this.hostModel.hostname+':'+this.hostModel.port + simplePath
      const reqops = {
        method : route.method || 'GET'
        ,body: sample.request || sample.post
      }

      //send request
      return this.http.request(url, reqops).toPromise()
      .then(response=>this.parseResponse(response))
      .catch( response=>Promise.reject(this.parseResponse(response)) )
    }

  }

  ngAfterViewInit(){
    setTimeout(()=>{
      //this.ref = Object.assign(this.ref||this,this)&&this
      this.ref = Object.assign(this,this.ref)
      this.refChange.emit(this.ref)
    }, 0)
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
      
      //unique tests
      this.actualTestRoutes = Tester.getRouteActualTests( this.AppData.rjon.routes )
      
      //unique routes with ready to use tests
      this.actualRoutes = Tester.getRoutesWithActualTests( this.AppData.rjon.routes )

      this.testRoutesChange.emit(this.testRoutes)
      this.actualRoutesChange.emit(this.actualTestRoutes)
      this.actualTestRoutesChange.emit(this.actualRoutes)


      this.hostModel = this.getDefaultHostModel()
    })
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

    return this.myTester.testRoutes(this.AppData.rjon.routes, this.hostModel)
    //.then( results=>this.testResults=results )
    //.then( results=>console.log('results',results) )
    .catch( e=>console.log(this.error=e) )
    .then( ()=>this.testing=false )
  }
}
