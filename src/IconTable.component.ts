import { EventEmitter, Input, Output, Component } from '@angular/core'
import { statIconMap } from "./statIconMap"
import { string } from "./templates/icon-table.pug"

@Component({
  selector:'icon-table',
  template:string
}) export class IconTable{
  public statIconMap = statIconMap
  @Input() activeIcons = []
  @Output() onClick = new EventEmitter()
}
