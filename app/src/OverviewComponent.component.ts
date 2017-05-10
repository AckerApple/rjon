import { AckOffline } from "ack-angular"
import { Component, EventEmitter } from '@angular/core'
import { fxArray } from "./prefx"
import { AppData } from "./AppData"
import { string as overviewComponent } from "./templates/overview-component.pug"
import { array } from "ack-angular/pipes.class"

@Component({
  selector: 'overview-component',
  template: overviewComponent,
  animations: fxArray
}) export class OverviewComponent {
  //public rjonSaves={}
  public saveOfflineName
  public error
  public viewRjonMerge:boolean

  constructor(public AppData:AppData, public AckOffline:AckOffline){}

  loadByOfflineName(name){
    //this.saveOfflineName = name
    if(!name)return
    this.AppData.setRjonString( this.AppData.rjonSaves[name] )
  }

  setSaveRjonStringAs(string, name){
    if(!name)return this.AppData.saveOffline(string);

    try{
      const rjon = JSON.parse(string)
      rjon.name = name
      return this.AppData.setSaveRjon(rjon)
    }catch(e){
      this.AppData.saveOffline(string)
    }
  }
}
