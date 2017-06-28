import { EventEmitter, Input, Output, Component } from '@angular/core'
import { string } from "./templates/table-of-hosts.pug"

@Component({
  selector:'table-of-hosts',
  template:string
}) export class TableOfHosts{
  @Input() hosts
  @Input() selectable = false
  @Output() select = new EventEmitter()
}