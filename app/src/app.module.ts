//-import { UIRouterModule } from "ui-router-ng2"
//import * as marked from "marked"

import { Ng2PageScrollModule, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { FormsModule }   from '@angular/forms';
import {
  Pipe,
  EventEmitter,
  Input,
  Component,
  NgModule
} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as packJson from "../../package.json"

import { RouteReporter } from "ack-angular/RouteReporter.component"
import { RouteWatchReporter } from "ack-angular/RouteWatchReporter"
import { AckApi, AckModule, ErrorLog } from "ack-angular"

import { fxArray } from "./prefx"
import { routing, declarations as stateDecs } from "./states.object"

//import { string as markdownCss } from "./markdown.css"
import * as rjonHelper from "./rjonHelper"
import { AppData } from "./AppData"

import { TestRoute } from "./TestRoute.component"
import { EditRoute } from "./EditRoute.component"
import { OverviewComponent } from "./OverviewComponent.component"
import { RjonTester } from "./RjonTester.component"

import { RjonMarkdown } from "./RjonMarkdown.component"

import * as nodedump from 'nodedump'

@Pipe({name: 'dump'}) export class Dump {
  transform(input, options={}) {
    //return nodedump(input, options)
    return nodedump.dump(input, Object.assign({hideTypes:['Function']}, options))
  }
}


import { string as rjonBuilder } from "./templates/rjon-builder.pug"
@Component({
  selector:'rjon-builder',
  template:rjonBuilder
}) export class RjonBuilder{
  constructor(public AppData:AppData){}
}

import { string as tableOfHosts } from "./templates/table-of-hosts.pug"
@Component({
  selector:'table-of-hosts',
  template:tableOfHosts
}) export class TableOfHosts{
  @Input() public hosts
}

import { statIconMap } from "./statIconMap"
import { string as tableOfRoutes } from "./templates/table-of-routes.pug"
@Component({
  selector:'table-of-routes',
  template:tableOfRoutes
}) export class TableOfRoutes{
  @Input() public routes
  @Input() public links = false
  public statIconMap = statIconMap
}

import { string as rjonLinks } from "./templates/rjon-links.pug"
@Component({
  selector:'rjon-links',
  template:rjonLinks
}) export class RjonLinks {
  @Input() public rjon = {name:null}
  //public markdownCss = ''

  constructor(){
    //this.fetchMarkdownCss()
  }

  getEmailString(){
    return 'mailto:?subject=rjon '+this.rjon.name+'&body='+encodeURIComponent(this.getDownloadString())
  }

  getMarkdownString(){
    return rjonHelper.rjonToMarkdown(this.rjon)
  }

  getDownloadString(){
    return JSON.stringify(this.rjon, null, 2)//this.AppData.rjonString
  }

  /*getDownloadHtml(){
    let string = '<!DOCTYPE html><html lang="en"><body>'+this.markdownCss + this.innerHtmlModel+'</body></html>'
    return string.replace(/replaceref/g,'href')
  }

  fetchMarkdownCss(){
    this.AckApi.request({url:'markdown.css'})
    .then(markdownCss=>this.markdownCss='<style>'+markdownCss+'</style>')
  }*/
}

import { string as rjonAppStage } from "./templates/rjon-app-stage.pug"
@Component({
  selector: 'rjon-app-stage',
  template: rjonAppStage,
  animations: fxArray
}) export class AppComponent {
  public version = packJson['version']
  @Input() public panelAnim = 'slideInLeft'

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
    FormsModule,
    routing,
    AckModule,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [
    AppData,
    RouteWatchReporter
  ],
  declarations: [
    TableOfHosts,
    TableOfRoutes,
    RjonBuilder,
    RjonTester,
    Dump,
    RjonLinks,
    TestRoute,
    EditRoute,
    RjonMarkdown,
    RouteReporter,
    AppComponent,
    OverviewComponent,
    RjonViewer,
    ...stateDecs
    //...ackDecs,
    //...ackPipes
  ],
  bootstrap:    [ AppComponent ]
}) export class AppModule { }