import { RouterModule } from '@angular/router';
import { Component} from '@angular/core';

@Component({template:''}) export class Overview{}
@Component({template:''}) export class Builder{}
@Component({template:''}) export class Reviewing{}
@Component({template:''}) export class Testing{}

export const declarations = [
  Overview,
  Builder,
  Reviewing,
  Testing
]

export const routes = [
  {name: 'overview', path: 'overview',  component: Overview},
  {name: 'builder', path: 'builder',  component: Builder},
  {name: 'reviewing', path: 'reviewing',  component: Reviewing},
  {name: 'testing', path: 'testing',  component: Testing}
  ,{path: '',   redirectTo: 'overview', pathMatch: 'full' },//default route
  {path: '**',   redirectTo: 'overview' }//404
]

export const routeConfig = {useHash:true, initialNavigation:true, enableTracing:false}
export const routing = RouterModule.forRoot(routes, routeConfig)
