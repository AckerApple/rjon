//-import { UIRouterModule } from "ui-router-ng2"
//import * as marked from "marked"
import { FormsModule }   from '@angular/forms'
import {
  //Pipe,
  //EventEmitter,
  Input,
  //Output,
  Component,
  NgModule
} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AckModule } from "ack-angular"
import * as packJson from "../../package.json"

import { RouteReporter } from "ack-angular/RouteReporter.directive"
import { RouteWatchReporter } from "ack-angular/RouteWatchReporter"

import { fxArray } from "ack-angular-fx"
import { routing, declarations as stateDecs } from "./states.object"

import { AppData } from "./AppData"

import { OverviewComponent } from "./OverviewComponent.component"
import { RjonMerge } from "./RjonMerge.component"
import { RjonTester } from "./RjonTester.component"

import { RjonModule } from "../../src/RjonModule"

import { string as rjonBuilder } from "./templates/rjon-builder.pug"
@Component({
  selector:'rjon-builder',
  template:rjonBuilder,
  animations:fxArray
}) export class RjonBuilder{
  loadOfflineName
  viewRjonMerge
  loadByOfflineName
  dedup
  screenWidthModel
  stateName
  isSwaping

  constructor(public AppData:AppData){}

  routeToBgClass(route){
    const method = (route.method||'GET').toUpperCase()

    switch(method){
      case 'GET':return 'bg-info'
      case 'PUT':case 'POST':case 'PATCH':return 'bg-warning'
      case 'DELETE':return 'bg-danger'
    }
    return ''
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

import { string as rjonAppStage } from "./templates/rjon-app-stage.pug"
@Component({
  selector: 'rjon-app-stage',
  template: rjonAppStage,
  animations: fxArray
}) export class AppComponent {
  screenWidthModel
  stateName
  isSwaping
  isBackMode
  version = packJson['version']
  @Input() panelAnim = 'slideInRight'

  constructor(public AppData:AppData){}
}

import { string as rjonViewer } from "./templates/rjon-viewer.pug"
@Component({
  selector: 'rjon-viewer',
  template: rjonViewer,
  animations: fxArray
}) export class RjonViewer {
  //public innerHtmlModel
  constructor(public AppData:AppData){}
}

@NgModule({
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    FormsModule,
    RjonModule,
    AckModule.forRoot()
  ],
  providers: [
    AppData,
    RouteWatchReporter
  ],
  declarations: [
    RjonBuilder,
    RjonTester,
    RouteReporter,
    AppComponent,
    OverviewComponent,
    RjonMerge,
    RjonViewer,
    ...stateDecs
  ],
  bootstrap: [ AppComponent ]
}) export class AppModule { }
