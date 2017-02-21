import { Component,Input,Output,NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app2',
  //inputs:['name'],
  template: `<h1>Hello {{name}}</h1>`
}) class AppComponent2 {
  @Input() name:string;// 'no-rest';
}



@Component({
  selector: 'my-app',
  //inputs:['name'],
  //outputs:['test'],
  template: `<my-app2 [name]="test"></my-app2> - {{test}}`
  //directives: [AppComponent2]
}) class AppComponent {
  test:string 'ajax';
}

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,AppComponent2 ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
