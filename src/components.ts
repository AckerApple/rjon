import { Pipe, EventEmitter, Input, Output, Component } from '@angular/core'
import { statIconMap } from "./statIconMap"
import * as rjonHelper from "./rjonHelper"
import { TestRoute } from "./TestRoute.component"
import { EditRoute } from "./EditRoute.component"
import { RjonMarkdown } from "./RjonMarkdown.component"

import * as nodedump from 'nodedump'
@Pipe({name: 'dump'}) export class Dump {
  transform(input, options={}) {
    //return nodedump(input, options)
    return nodedump.dump(input, Object.assign({hideTypes:['Function']}, options))
  }
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

import { string as tableOfHosts } from "./templates/table-of-hosts.pug"
@Component({
  selector:'table-of-hosts',
  template:tableOfHosts
}) export class TableOfHosts{
  @Input() public hosts
}

import { string as tableOfRoutes } from "./templates/table-of-routes.pug"
@Component({
  selector:'table-of-routes',
  template:tableOfRoutes
}) export class TableOfRoutes{
  @Input() public routes
  @Input() public links = false
  public statIconMap = statIconMap
}

import { string as iconTable } from "./templates/icon-table.pug"
@Component({
  selector:'icon-table',
  template:iconTable
}) export class IconTable{
  public statIconMap = statIconMap
  @Input() activeIcons = []
  @Output() onClick = new EventEmitter()
}

export const declarations=[
  TableOfRoutes,
  IconTable,
  EditRoute,
  TestRoute,
  RjonMarkdown,
  TableOfHosts,
  Dump,
  RjonLinks
]