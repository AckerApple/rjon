//import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule }   from '@angular/forms'
import{ HttpModule } from '@angular/http'
import { declarations } from "./components"

import { AckModule } from "ack-angular"

@NgModule({
  imports:[
    CommonModule
    ,BrowserModule
    ,FormsModule
    ,HttpModule
    ,AckModule
    //,Ng2PageScrollModule.forRoot()
  ]
  ,declarations: declarations
  ,exports:[
    //Ng2PageScrollModule,
    ...declarations
  ]
}) export class RjonModule {}