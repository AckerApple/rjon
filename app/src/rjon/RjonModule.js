"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//import { providers } from "./providers"
var components_1 = require("./components");
var ack_angular_1 = require("ack-angular");
var RjonModule = (function () {
    function RjonModule() {
    }
    return RjonModule;
}());
RjonModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    http_1.HttpModule,
                    ack_angular_1.AckModule
                ],
                declarations: components_1.declarations
                //,providers:providers
                ,
                exports: components_1.declarations.slice()
            },] },
];
/** @nocollapse */
RjonModule.ctorParameters = function () { return []; };
exports.RjonModule = RjonModule;
//# sourceMappingURL=RjonModule.js.map