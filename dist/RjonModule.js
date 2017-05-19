"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ng2_page_scroll_1 = require("ng2-page-scroll");
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
                    ack_angular_1.AckModule,
                    ng2_page_scroll_1.Ng2PageScrollModule.forRoot()
                ],
                declarations: components_1.declarations
                //,providers:providers
                ,
                exports: [ng2_page_scroll_1.Ng2PageScrollModule].concat(components_1.declarations)
            },] },
];
/** @nocollapse */
RjonModule.ctorParameters = function () { return []; };
exports.RjonModule = RjonModule;
//# sourceMappingURL=RjonModule.js.map