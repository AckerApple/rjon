import { EventEmitter, Input, Output, Component } from '@angular/core'
import { string } from "./templates/table-of-routes.pug"
import { statIconMap } from "./statIconMap"

@Component({
  selector:'table-of-routes',
  template:string
}) export class TableOfRoutes{
  statIconMap = statIconMap
  @Input() links = false
  @Input() routes
  @Input() selectable = false
  @Output() select = new EventEmitter()
}