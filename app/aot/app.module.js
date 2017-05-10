//-import { UIRouterModule } from "ui-router-ng2"
//import * as marked from "marked"
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
var ng2_page_scroll_1 = require("ng2-page-scroll");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var packJson = require("../../package.json");
var RouteReporter_component_1 = require("ack-angular/RouteReporter.component");
var RouteWatchReporter_1 = require("ack-angular/RouteWatchReporter");
var ack_angular_1 = require("ack-angular");
var prefx_1 = require("./prefx");
var states_object_1 = require("./states.object");
//import { string as markdownCss } from "./markdown.css"
var rjonHelper = require("./rjonHelper");
var AppData_1 = require("./AppData");
var TestRoute_component_1 = require("./TestRoute.component");
var EditRoute_component_1 = require("./EditRoute.component");
var OverviewComponent_component_1 = require("./OverviewComponent.component");
var RjonMerge_component_1 = require("./RjonMerge.component");
var RjonTester_component_1 = require("./RjonTester.component");
var RjonMarkdown_component_1 = require("./RjonMarkdown.component");
var statIconMap_1 = require("./statIconMap");
var nodedump = require("nodedump");
var Dump = (function () {
    function Dump() {
    }
    Dump.prototype.transform = function (input, options) {
        if (options === void 0) { options = {}; }
        //return nodedump(input, options)
        return nodedump.dump(input, Object.assign({ hideTypes: ['Function'] }, options));
    };
    return Dump;
}());
Dump = __decorate([
    core_1.Pipe({ name: 'dump' })
], Dump);
exports.Dump = Dump;
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
var icon_table_pug_1 = require("./templates/icon-table.pug");
var IconTable = (function () {
    function IconTable(AppData) {
        this.AppData = AppData;
        this.statIconMap = statIconMap_1.statIconMap;
        this.activeIcons = [];
        this.onClick = new core_1.EventEmitter();
    }
    return IconTable;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IconTable.prototype, "activeIcons", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], IconTable.prototype, "onClick", void 0);
IconTable = __decorate([
    core_1.Component({
        selector: 'icon-table',
        template: icon_table_pug_1.string
    }),
    __metadata("design:paramtypes", [AppData_1.AppData])
], IconTable);
exports.IconTable = IconTable;
var table_of_hosts_pug_1 = require("./templates/table-of-hosts.pug");
var TableOfHosts = (function () {
    function TableOfHosts() {
    }
    return TableOfHosts;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableOfHosts.prototype, "hosts", void 0);
TableOfHosts = __decorate([
    core_1.Component({
        selector: 'table-of-hosts',
        template: table_of_hosts_pug_1.string
    })
], TableOfHosts);
exports.TableOfHosts = TableOfHosts;
var table_of_routes_pug_1 = require("./templates/table-of-routes.pug");
var TableOfRoutes = (function () {
    function TableOfRoutes() {
        this.links = false;
        this.statIconMap = statIconMap_1.statIconMap;
    }
    return TableOfRoutes;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableOfRoutes.prototype, "routes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableOfRoutes.prototype, "links", void 0);
TableOfRoutes = __decorate([
    core_1.Component({
        selector: 'table-of-routes',
        template: table_of_routes_pug_1.string
    })
], TableOfRoutes);
exports.TableOfRoutes = TableOfRoutes;
var rjon_links_pug_1 = require("./templates/rjon-links.pug");
var RjonLinks = (function () {
    //public markdownCss = ''
    function RjonLinks() {
        this.rjon = { name: null };
        //this.fetchMarkdownCss()
    }
    RjonLinks.prototype.getEmailString = function () {
        return 'mailto:?subject=rjon ' + this.rjon.name + '&body=' + encodeURIComponent(this.getDownloadString());
    };
    RjonLinks.prototype.getMarkdownString = function () {
        return rjonHelper.rjonToMarkdown(this.rjon);
    };
    RjonLinks.prototype.getDownloadString = function () {
        return JSON.stringify(this.rjon, null, 2); //this.AppData.rjonString
    };
    return RjonLinks;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RjonLinks.prototype, "rjon", void 0);
RjonLinks = __decorate([
    core_1.Component({
        selector: 'rjon-links',
        template: rjon_links_pug_1.string
    }),
    __metadata("design:paramtypes", [])
], RjonLinks);
exports.RjonLinks = RjonLinks;
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
            forms_1.FormsModule,
            states_object_1.routing,
            ack_angular_1.AckModule,
            ng2_page_scroll_1.Ng2PageScrollModule.forRoot()
        ],
        providers: [
            AppData_1.AppData,
            RouteWatchReporter_1.RouteWatchReporter
        ],
        declarations: [
            TableOfHosts,
            TableOfRoutes,
            RjonBuilder,
            RjonTester_component_1.RjonTester,
            Dump,
            RjonLinks,
            TestRoute_component_1.TestRoute,
            EditRoute_component_1.EditRoute,
            RjonMarkdown_component_1.RjonMarkdown,
            RouteReporter_component_1.RouteReporter,
            AppComponent,
            OverviewComponent_component_1.OverviewComponent,
            RjonMerge_component_1.RjonMerge,
            RjonViewer,
            IconTable
        ].concat(states_object_1.declarations
        //...ackDecs,
        //...ackPipes
        ),
        bootstrap: [AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map