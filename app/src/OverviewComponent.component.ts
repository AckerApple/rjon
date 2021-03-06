import { AckOffline } from "ack-angular"
import {
  Component//, EventEmitter
} from '@angular/core'
import { fxArray } from "ack-angular-fx"
import { AppData } from "./AppData"
import { string as overviewComponent } from "./templates/overview-component.pug"
//import { array } from "ack-angular/pipes.class"

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
}
