import { fxArray } from "./prefx"
import { AppData } from "./AppData"
import * as rjonHelper from "./rjonHelper"
import { string as rjonMarkdown } from "./templates/rjon-markdown.pug"
import { EventEmitter, Output, Input, Component } from '@angular/core'

@Component({
  selector:'rjon-markdown',
  template:rjonMarkdown,
  animations:fxArray
}) export class RjonMarkdown{
  public statIconMap = rjonHelper.statIconMap

  @Input() public rjon
  @Output() public onChange = new EventEmitter()

  constructor(public AppData:AppData){}

  serverUrlByRoute(host, route, sample){
    return rjonHelper.serverUrlByRoute(host, route, sample)
  }

  /* deprecated */
  defToArray(sample){
    return rjonHelper.defToArray(sample)
  }

  deleteRoute(route){
    for(let x=this.rjon.routes.length-1; x >= 0; --x){
      if(this.rjon.routes[x]==route){
        this.rjon.routes.splice(x,1)
        this.onChange.emit()
        return
      }
    }
  }
}