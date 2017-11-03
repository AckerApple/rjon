"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { Ng2PageScrollModule } from 'ng2-page-scroll';
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//import { providers } from "./providers"
var components_1 = require("./components");
var ack_angular_1 = require("ack-angular");
var RjonModule = /** @class */ (function () {
    function RjonModule() {
    }
    RjonModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        ack_angular_1.AckModule
                        //,Ng2PageScrollModule.forRoot()
                    ],
                    declarations: components_1.declarations,
                    exports: components_1.declarations.slice()
                },] },
    ];
    /** @nocollapse */
    RjonModule.ctorParameters = function () { return []; };
    return RjonModule;
}());
exports.RjonModule = RjonModule;
//# sourceMappingURL=RjonModule.js.map