import { EventEmitter, Input, Output, Component } from '@angular/core'
import { string } from "./templates/table-of-routes.pug"
import { statIconMap } from "./statIconMap"
import { fxArray } from "./prefx"

@Component({
  selector:'table-of-routes',
  template:string,
  animations:fxArray
}) export class TableOfRoutes{
  statIconMap = statIconMap
  @Input() links = false
  @Input() routes
  @Input() selectable = false
  @Output() select = new EventEmitter()
}