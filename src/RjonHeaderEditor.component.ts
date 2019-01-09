import { EventEmitter, Input, Output, Component } from '@angular/core'
import { string } from "./templates/rjon-header-editor.pug"
import { fxArray } from "ack-angular-fx"

@Component({
  selector:'rjon-header-editor',
  template:string,
  animations:fxArray
}) export class RjonHeaderEditor{
  @Input() data
  @Output() dataChange = new EventEmitter()

  add(){
    this.data = this.data || {}
    this.data['header'+Object.keys(this.data).length] = ''
    this.dataChange.emit(this.data)
  }

  drop(key){
    delete this.data[key]
    this.dataChange.emit(this.data)
  }

  getKeys(){
    return this.data ? Object.keys(this.data) : []
  }
}