import { Input, Output, Component, EventEmitter } from '@angular/core'
import { fxArray } from "./prefx"
import { string as testRoute } from "./templates/test-route.pug"
import { AckApi } from "ack-angular"
import * as rjonHelper from "./rjonHelper"

/** interface to test a single route */
@Component({
  selector:'test-route',
  template:testRoute,
  animations:fxArray
}) export class TestRoute{
  @Input() route = {}
  @Input() headers
  @Input() hosts
  @Input() spaceSaving:boolean=true
  @Input() hostModel
  @Output() hostModelChange = new EventEmitter()

  headersModel = {'Content-Type':'application/json'}
  protocolModel
  contentTypeModel = 'application/json'
  rjonHelper = rjonHelper
  pathModel
  methodModel
  loadSample
  bodyModel
  response
  tryingSend
  sending:number=0
  error
  responseView

  constructor(public AckApi:AckApi){}

  ngOnInit(){
    this.pathModel = this.route['path']
    this.methodModel = this.route['method']
    this.bodyModel = this.getDefaultBodyModel()
    this.hostModel = this.getDefaultHostModel()
    this.applyHostHeaders(this.hostModel)
    this.applyProtocol()

    if(this.headers)Object.assign(this.headersModel, this.headers)
    
    setTimeout(()=>{
      this.route = this.route || {}
      this.hostModelChange.emit(this.hostModel)
    }, 0)
  }

  setContentType(type){
    for(let x in this.headersModel){
      if(this.headersModel[x].name.toLowerCase()=='content-type'){
        return this.headersModel[x] = type
      }      
    }
    this.headersModel['Content-Type'] = type
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
    this.applyHostHeaders(this.hostModel)
    if(!this.protocolModel)this.applyProtocol()
  }

  applyHostHeaders(host){
    if(host.headers)Object.assign(this.headersModel, host.headers)
  }

  applyProtocol(){
    if( !this.hostModel || !this.hostModel.protocol )return;
    this.protocolModel = this.hostModel.protocol
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

  getProtocol(){
    if(this.hostModel.hostname.search(/^http(s)?:/)>=0)return ''
    return (this.protocolModel || this.hostModel.protocol || (this.hostModel.port==443?'https':'http'))+'://'
  }

  send(){
    const port = this.hostModel.port||80
    const protocol = this.getProtocol()
    const host = protocol + this.hostModel.hostname
    const route = (this.pathModel.substring(0, 1)=='/' ? '' : '/') + this.pathModel
    const url = host+':' + port + route

    const config={
      method:this.methodModel,
      url:url,
      body:this.bodyModel,
      headers:this.headersModel,
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
