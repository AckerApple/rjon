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
  ]
  ,declarations: declarations
  //,providers:providers
  ,exports:[ ...declarations ]
}) export class RjonModule {}