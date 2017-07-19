# RJON
Pronounced (like a pirate) : ARRRrrrrrrrrrrJohn

## Route Javascript Object Notation
A superb conduit to building, testing, and reviewing API end-points

USE THE APP : [rjon app](https://ackerapple.github.io/rjon/)


> The need for this app has come before properly documenting it. More documentation coming soon

### Table of Contents
- [TODO](#todo)
- [RJON Map](#rjon-map)
- [Angular Module](#angular-module)

### TODO
- Documentation
  - Github gh-pages HTTPS to HTTP error control
- Functionality
  - Ability to download rjon app

## RJON Map
Below is a map of standarized RJON

```javascript
{
  "routes": [
    {
      "path": "",
      "method": "GET",
      "returnType": "",//expected type of response
      "description": "",
      "notes": [""],
      "status": ["star"],//keyword descriptors. Often matches status icon. star=⭐
      "variables":{
        "query":{ "name":"type" },//url variable details
        "post":{ "name":"type" },//post variable details
        "params":{ "name":"type" }//path variable details
      },
      "sample": [
        {
          "path": "",//sample path substitution
          "query": {},//url variables
          "params": {},//path variables
          "request": {},//request body sample
          "headers": {"name": "value"}
          "post": {},//form post variables
          "test": {//object or boolean
            "timeout": 2000,
            "statusCode": 200,
            "body": [],
            "only": false,//skip others bulk tests
            "skip": false,//skip during bulk tests
            "title": ""//extra details
          }
        }
      ]
    }
  ],
  "hosts": [
    {
      "protocol": "https",
      "hostname": "localhost",
      "port": 8080,
      "description": "",
      "notes": [""],
      "headers": {"name": "value"},//headers meant for all requests to this host
      "routes": {}//routes limited to only this host
    }
  ],
  "headers": {"name": "value"},//global headers meant for all requests
  "name":""//save-reference
}
```

## Angular Module
You can use parts the rjon tester app in your  Angular app

### Installs
```bash
npm install rjon ng2-page-scroll nodedump --save-dev
```

### Usage Example
The following example will produce an interface to interact with route defintions

```javascript
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RjonModule } from "rjon"

@Component({
  selector:"app",
  template:"<rjon-markdown [rjon]=\"properRjonObject\"></rjon-markdown>"
}) export class AppComponent{
  properRjonObject = {
    routes:[],
    hosts:[]
  }
}

@NgModule({
  imports:[
    BrowserModule
    RjonModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap:[ AppComponent ]
}) export class AppModule { }
```

### Angular Usage required CSS
Be sure to include the right css for you to include rjon with proper formatting

In SASS, in most cases it's
```css
@import "CSS:rjon/dist/";
```
> If you already have ack-css-boot then you may only need ```@import "CSS:rjon/dist/markdown";```

In plain CSS, in most cases it's
```html
<link href="rjon/dist/styles.css" type="text/css" rel="stylesheet" />
```