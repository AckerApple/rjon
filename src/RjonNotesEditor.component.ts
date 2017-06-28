import { EventEmitter, Input, Output, Component } from '@angular/core'
import { fxArray } from "./prefx"
import { string } from "./templates/rjon-notes-editor.pug"

@Component({
  selector:'rjon-notes-editor',
  template:string,
  animations:fxArray
}) export class RjonNotesEditor{
  @Input() data
  @Output() dataChange = new EventEmitter()

  add(){
    this.data = this.data||[]
    this.data.push('')
    this.dataChange.emit(this.data)
  }
}