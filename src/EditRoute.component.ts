import { Input, Output, Component, EventEmitter } from '@angular/core'
import { fxArray } from "./prefx"
import { string as editRoute } from "./templates/edit-route.pug"
import { pipes } from "ack-angular/pipes.class"
import * as rjonHelper from "./rjonHelper"
import { statIconMap } from "./statIconMap"

@Component({
  selector:'edit-route',
  template:editRoute,
  animations:fxArray
}) export class EditRoute{
  statIconMap = statIconMap
  
  @Input() route
  @Input() hosts
  @Input() hostModel
  @Output() onChange = new EventEmitter()
  @Output() onClose = new EventEmitter()

  toggleRouteStatus(status){
    this.route.status = this.route.status || []
    this.route.status = pipes.array( this.route.status )

    const index = this.route.status.indexOf(status)
    if(index>=0){
      this.route.status.splice( index,1 )
    }else{
      this.route.status.push( status )
    }

    this.onChange.emit()
  }

  addNote(){
    this.route.notes = pipes.array(this.route.notes)
    this.route.notes.push('')
  }

  addSample(){
    this.route.sample = pipes.array(this.route.sample)
    this.route.sample.push({title:null, timeout:null, statusCode:null, only:null, skip:null})
  }

  addSampleTest(sample){
    sample.test = pipes.array(sample.test)
    sample.test.push({})
  }

  setSampleBody(sample,value){
    sample.request = JSON.parse(value)
  }

  setTestBody(test,value){
    test.body = JSON.parse(value)
  }
}