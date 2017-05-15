//-import { UIRouterModule } from "ui-router-ng2"
//import * as marked from "marked"
import { FormsModule }   from '@angular/forms'
import { Ng2PageScrollModule, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import {
  Pipe,
  EventEmitter,
  Input,
  Output,
  Component,
  NgModule
} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AckModule } from "ack-angular"
import * as packJson from "../../package.json"

import { RouteReporter } from "ack-angular/RouteReporter.component"
import { RouteWatchReporter } from "ack-angular/RouteWatchReporter"

import { fxArray } from "./rjon/prefx"
import { routing, declarations as stateDecs } from "./states.object"

//import { string as markdownCss } from "./markdown.css"
import * as rjonHelper from "./rjon/rjonHelper"
import { AppData } from "./AppData"

import { OverviewComponent } from "./OverviewComponent.component"
import { RjonMerge } from "./RjonMerge.component"
import { RjonTester } from "./RjonTester.component"

import { RjonModule } from "./rjon/index"

import { string as rjonBuilder } from "./templates/rjon-builder.pug"
@Component({
  selector:'rjon-builder',
  template:rjonBuilder,
  animations:fxArray
}) export class RjonBuilder{
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
}

import { string as rjonAppStage } from "./templates/rjon-app-stage.pug"
@Component({
  selector: 'rjon-app-stage',
  template: rjonAppStage,
  animations: fxArray
}) export class AppComponent {
  public version = packJson['version']
  @Input() public panelAnim = 'slideInRight'

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
    Ng2PageScrollModule.forRoot(),
    FormsModule,
    AckModule,
    RjonModule
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
    //...ackDecs,
    //...ackPipes
  ],
  bootstrap:    [ AppComponent ]
}) export class AppModule { }
