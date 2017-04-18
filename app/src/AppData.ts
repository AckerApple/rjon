import { AckOffline, ErrorLog } from "ack-angular"
//import * as ack from "ack-x/index-browser"

import {
  Injectable,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

@Injectable() export class AppData{
  public invalidRjon:boolean = true
  public invalidJson:boolean = true
  public saving:boolean = false
  public error
  public data = {}
  public load
  public lastSaveAt
  public rjonSaves = {}

  @Input() public rjon = {routes:[], hosts:[]}
  @Output() public rjonChange = new EventEmitter()
  @Input() public rjonString = '{"routes":[], "hosts":[]}'
  @Output() public rjonStringChange = new EventEmitter()

  constructor(public AckOffline:AckOffline, public ErrorLog:ErrorLog){
    this.load = this.AckOffline.get('rjon')
    .then(rjon=>{
      this.data = rjon && rjon['string'] ? rjon : {string:''}
      this.setRjonString( this.data['string'] )
    })
    .then( ()=>this.loadOfflineSaves() )
    .catch(e=>this.error=e)
  }

  loadOfflineSaves(){
    return this.AckOffline.get('rjonSaves')
    .then( rjonSaves=>this.rjonSaves=rjonSaves )
  }

  setSaveRjon(rjon){
    this.rjon = rjon
    this.rjonChange.emit(this.rjon)
    let promise = Promise.resolve()

    if(rjon.name){
      promise = promise.then( ()=>this.saveRjonAs(rjon.name, rjon) )
    }

    return promise.then(()=>{
      const string = JSON.stringify(rjon, null, 2)
      this.rjonString = string
      this.rjonStringChange.emit(this.rjonString)
      return string
    })
    .then( string=>this.saveOffline( string ) )
    .catch(e=>this.error=e)
  }

  setRjonString(string){
    this.rjonString = string
    this.rjonStringChange.emit(this.rjonString)
    this.parseRjonString( this.rjonString )
  }

  parseRjonString(string?){
    try{
      this.rjon = JSON.parse( string||this.rjonString )
      this.rjonChange.emit(this.rjon)
      
      this.invalidJson = false
      this.invalidRjon = !this.isValidRjon(this.rjon)
    }catch(e){
      this.invalidJson = true
    }
  }

  parseAndSave(string?){
    this.parseRjonString(string)
    return this.saveOffline()
  }

  saveOffline(string?){
    if(this.saving)return

    this.saving = true
    
    setTimeout(()=>{
      string = string||this.rjonString

      Object.assign(this.data, {string:string})

      this.AckOffline.set('rjon',this.data)
      .catch( e=>this.error=this.ErrorLog.add(e) )
      .then( ()=>this.saving=false )
      .then( ()=>this.lastSaveAt=Date.now() )
    }, 1000)
  }

  saveRjonAs(name, rjon:{name, routes, hosts}){
    return this.AckOffline.get('rjonSaves')
    .then(rjonSaves=>{
      rjonSaves = rjonSaves || {}
      rjon.name = name
      rjonSaves[name] = JSON.stringify(rjon, null, 2)
      return this.rjonSaves = rjonSaves
    })
    .then( rjonSaves=>this.AckOffline.set('rjonSaves',rjonSaves) )
    .catch(e=>this.error=e)
  }

  isValidRjon(ob){
    return ob.routes && ob.hosts ? true : false
  }
}