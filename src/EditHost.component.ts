import { Input, Output, Component, EventEmitter } from '@angular/core'
import { fxArray } from "ack-angular-fx"
import { string } from "./templates/edit-host.pug"
//import { pipes } from "ack-angular/pipes.class"
//import * as rjonHelper from "./rjonHelper"
//import { statIconMap } from "./statIconMap"

@Component({
  selector:'edit-host',
  template:string,
  animations:fxArray
}) export class EditHost{
  route
  //statIconMap = statIconMap
  
  @Input() hostModel
  @Output() onChange = new EventEmitter()
  @Output() onClose = new EventEmitter()
/*
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
*/
}
