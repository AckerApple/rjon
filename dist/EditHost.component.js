"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var prefx_1 = require("./prefx");
var edit_host_pug_1 = require("./templates/edit-host.pug");
//import { pipes } from "ack-angular/pipes.class"
//import * as rjonHelper from "./rjonHelper"
//import { statIconMap } from "./statIconMap"
var EditHost = (function () {
    function EditHost() {
        //statIconMap = statIconMap
        this.onChange = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
    }
    return EditHost;
}());
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
EditHost.decorators = [
    { type: core_1.Component, args: [{
                selector: 'edit-host',
                template: edit_host_pug_1.string,
                animations: prefx_1.fxArray
            },] },
];
/** @nocollapse */
EditHost.ctorParameters = function () { return []; };
EditHost.propDecorators = {
    'hostModel': [{ type: core_1.Input },],
    'onChange': [{ type: core_1.Output },],
    'onClose': [{ type: core_1.Output },],
};
exports.EditHost = EditHost;
//# sourceMappingURL=EditHost.component.js.map