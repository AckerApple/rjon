import { Ng2PageScrollModule, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule }   from '@angular/forms'
import{ HttpModule } from '@angular/http'
//import { providers } from "./providers"
import { declarations } from "./components"

import { AckModule } from "ack-angular"

@NgModule({
  imports:[
    CommonModule
    ,FormsModule
    ,HttpModule
    ,AckModule
    ,Ng2PageScrollModule.forRoot()
  ]
  ,declarations: declarations
  //,providers:providers
  ,exports:[ Ng2PageScrollModule, ...declarations ]
}) export class RjonModule {}