import { fxArray } from "./prefx"
import * as rjonHelper from "./rjonHelper"
import { statIconMap } from "./statIconMap"
import { string as rjonMarkdown } from "./templates/rjon-markdown.pug"
import { EventEmitter, Output, Input, Component } from '@angular/core'

@Component({
  selector:'rjon-markdown',
  template:rjonMarkdown,
  animations:fxArray
}) export class RjonMarkdown{
  testRoute
  editRoute
  editHost
  host
  route
  statIconMap = statIconMap

  @Input() rjon
  @Output() onChange = new EventEmitter()

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

  deleteHost(host){
    for(let x=this.rjon.hosts.length-1; x >= 0; --x){
      if(this.rjon.hosts[x]==host){
        this.rjon.hosts.splice(x,1)
        this.onChange.emit()
        return
      }
    }
  }
}