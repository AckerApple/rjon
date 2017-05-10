import { Input, Output, Component, EventEmitter } from '@angular/core'
import { fxArray } from "./prefx"
import { string as testRoute } from "./templates/test-route.pug"
import { AckApi } from "ack-angular"
import * as rjonHelper from "./rjonHelper"

@Component({
  selector:'test-route',
  template:testRoute,
  animations:fxArray
}) export class TestRoute{
  @Input() public route = {}
  @Input() public hosts
  @Input() public spaceSaving:boolean=true
  @Input() public hostModel
  @Output() public hostModelChange = new EventEmitter()

  public rjonHelper = rjonHelper
  public pathModel
  public methodModel
  public loadSample
  public bodyModel
  public response
  public tryingSend
  public sending:number=0
  public error
  public responseView
  public headers={
    'Content-Type':'application/json'
  }

  constructor(public AckApi:AckApi){}

  ngOnInit(){
    this.pathModel = this.route['path']
    this.methodModel = this.route['method']
    this.bodyModel = this.getDefaultBodyModel()
    this.hostModel = this.getDefaultHostModel()
    setTimeout(()=>{
      this.route = this.route || {}
      this.hostModelChange.emit(this.hostModel)
    }, 0)
  }

  getDefaultHostModel(){
    if(this.hostModel)return this.hostModel
    
    if(this.hosts && this.hosts.length){
      return this.hosts[0]
    }
  }

  setHostByIndex(index){
    this.hostModel = this.hosts[index]
    this.hostModelChange.emit(this.hostModel)
  }

  getDefaultBodyModel(){
    const firstSample = rjonHelper.defToArray(this.route['sample'])
    const rtn = this.bodyModel || (firstSample.length&&firstSample[0].request)
    return rtn ? JSON.stringify(rtn, null, 2) : ''
  }

  setBodyObject(ob){
    this.loadSample = null
    this.bodyModel = JSON.stringify(ob, null, 2)
  }

  trySend(){
    this.tryingSend = true
    this.response = null
    this.error = null

    if(this.hostModel){
      this.send()
    }
  }

  send(){
    const port = this.hostModel.port||80
    const protocol = this.hostModel.hostname.search(/^http(s)?:/)>=0 ? '' : 'http://'
    const host = protocol+this.hostModel.hostname
    const route = (this.pathModel.substring(0, 1)=='/' ? '' : '/') + this.pathModel
    const url = host+':' + port + route

    const config={
      method:this.methodModel,
      url:url,
      body:this.bodyModel,
      headers:this.headers,
      promise:'all'
    }

    ++this.sending
    this.AckApi.request(config)
    .then( response=>this.response=response )
    .catch(e=>console.log(this.error=e))
    .then(()=>--this.sending)
    .then(()=>this.responseView='map')
  }
}
