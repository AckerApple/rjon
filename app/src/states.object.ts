import { RouterModule } from '@angular/router';
import { Component} from '@angular/core';

@Component({template:''}) export class FakeCom{}

export const declarations = [ FakeCom ]

export const routes = [
  {name: 'overview', path: 'overview',  component: FakeCom},
  {name: 'builder', path: 'builder',  component: FakeCom},
  {name: 'reviewing', path: 'reviewing',  component: FakeCom},
  {name: 'http', path: 'http',  component: FakeCom},
  {name: 'testing', path: 'testing',  component: FakeCom},
  {path: '',   redirectTo: 'overview', pathMatch: 'full' },//default route
  {path: '**',   redirectTo: 'overview' }//404
]

export const routeConfig = {
  useHash:true,
  initialNavigation:true,
  enableTracing:false
}
export const routing = RouterModule.forRoot(routes, routeConfig)
