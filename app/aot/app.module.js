"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//-import { UIRouterModule } from "ui-router-ng2"
//import * as marked from "marked"
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var ack_angular_1 = require("ack-angular");
var packJson = require("../../package.json");
var RouteReporter_component_1 = require("ack-angular/RouteReporter.component");
var RouteWatchReporter_1 = require("ack-angular/RouteWatchReporter");
var prefx_1 = require("./rjon/prefx");
var states_object_1 = require("./states.object");
var AppData_1 = require("./AppData");
var OverviewComponent_component_1 = require("./OverviewComponent.component");
var RjonMerge_component_1 = require("./RjonMerge.component");
var RjonTester_component_1 = require("./RjonTester.component");
var index_1 = require("./rjon/index");
var rjon_builder_pug_1 = require("./templates/rjon-builder.pug");
var RjonBuilder = (function () {
    function RjonBuilder(AppData) {
        this.AppData = AppData;
    }
    RjonBuilder.prototype.routeToBgClass = function (route) {
        var method = (route.method || 'GET').toUpperCase();
        switch (method) {
            case 'GET': return 'bg-info';
            case 'PUT':
            case 'POST':
            case 'PATCH': return 'bg-warning';
            case 'DELETE': return 'bg-danger';
        }
        return '';
    };
    RjonBuilder.prototype.setSaveRjonStringAs = function (string, name) {
        if (!name)
            return this.AppData.saveOffline(string);
        try {
            var rjon = JSON.parse(string);
            rjon.name = name;
            return this.AppData.setSaveRjon(rjon);
        }
        catch (e) {
            this.AppData.saveOffline(string);
        }
    };
    return RjonBuilder;
}());
RjonBuilder = __decorate([
    core_1.Component({
        selector: 'rjon-builder',
        template: rjon_builder_pug_1.string,
        animations: prefx_1.fxArray
    }),
    __metadata("design:paramtypes", [AppData_1.AppData])
], RjonBuilder);
exports.RjonBuilder = RjonBuilder;
var rjon_app_stage_pug_1 = require("./templates/rjon-app-stage.pug");
var AppComponent = (function () {
    function AppComponent(AppData) {
        this.AppData = AppData;
        this.version = packJson['version'];
        this.panelAnim = 'slideInRight';
    }
    return AppComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AppComponent.prototype, "panelAnim", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'rjon-app-stage',
        template: rjon_app_stage_pug_1.string,
        animations: prefx_1.fxArray
    }),
    __metadata("design:paramtypes", [AppData_1.AppData])
], AppComponent);
exports.AppComponent = AppComponent;
var rjon_viewer_pug_1 = require("./templates/rjon-viewer.pug");
var RjonViewer = (function () {
    //public innerHtmlModel
    function RjonViewer(AppData) {
        this.AppData = AppData;
    }
    return RjonViewer;
}());
RjonViewer = __decorate([
    core_1.Component({
        selector: 'rjon-viewer',
        template: rjon_viewer_pug_1.string,
        animations: prefx_1.fxArray
    }),
    __metadata("design:paramtypes", [AppData_1.AppData])
], RjonViewer);
exports.RjonViewer = RjonViewer;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            states_object_1.routing,
            forms_1.FormsModule,
            ack_angular_1.AckModule,
            index_1.RjonModule
        ],
        providers: [
            AppData_1.AppData,
            RouteWatchReporter_1.RouteWatchReporter
        ],
        declarations: [
            RjonBuilder,
            RjonTester_component_1.RjonTester,
            RouteReporter_component_1.RouteReporter,
            AppComponent,
            OverviewComponent_component_1.OverviewComponent,
            RjonMerge_component_1.RjonMerge,
            RjonViewer
        ].concat(states_object_1.declarations
        //...ackDecs,
        //...ackPipes
        ),
        bootstrap: [AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map