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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var AppData_1 = require("./AppData");
var rjon_tester_pug_1 = require("./templates/rjon-tester.pug");
var rjonTester_1 = require("./rjonTester");
var prefx_1 = require("./prefx");
var RjonTester = (function () {
    function RjonTester(AppData, http) {
        this.AppData = AppData;
        this.http = http;
        this.testing = false;
        this.testResults = [];
        this.testRoutes = [];
        this.actualTestRoutes = [];
        this.actualRoutes = [];
        this.myTester = new rjonTester_1.Tester();
        this.hostModelChange = new core_1.EventEmitter();
        this.myTester.requestSampleRoute = function (sample, route, options) {
            options = options || {};
            options.host = options.host || 'localhost';
            var simplePath = rjonTester_1.Tester.getRouteSamplePath(route, sample);
            var reqops = {
                method: route.method || 'GET',
                url: 'http://' + options.host + ':' + options.port + simplePath,
                body: sample.request || sample.post
            };
            //send request
            return this.http.request(reqops);
        };
    }
    RjonTester.prototype.ngOnInit = function () {
        var _this = this;
        this.hostModel = this.getDefaultHostModel();
        return this.AppData.load.then(function () {
            if (!_this.AppData.rjon || !_this.AppData.rjon.routes)
                return;
            //routes with tests
            _this.testRoutes = rjonTester_1.Tester.getRouteTests(_this.AppData.rjon.routes);
            //unique tests
            _this.actualTestRoutes = rjonTester_1.Tester.getRouteActualTests(_this.AppData.rjon.routes);
            //unique routes with ready to use tests
            _this.actualRoutes = rjonTester_1.Tester.getRoutesWithActualTests(_this.AppData.rjon.routes);
        });
    };
    RjonTester.prototype.getDefaultHostModel = function () {
        if (this.hostModel)
            return this.hostModel;
        if (this.AppData.rjon.hosts && this.AppData.rjon.hosts.length) {
            return this.AppData.rjon.hosts[0];
        }
    };
    RjonTester.prototype.setHostByIndex = function (index) {
        this.hostModel = this.AppData.rjon.hosts[index];
        this.hostModelChange.emit(this.hostModel);
    };
    RjonTester.prototype.runTest = function () {
        if (this.testing)
            return;
        this.testing = true;
        return this.myTester.testRoutes(this.AppData.rjon.routes, this.hostModel);
    };
    return RjonTester;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RjonTester.prototype, "hostModelChange", void 0);
RjonTester = __decorate([
    core_1.Component({
        selector: 'rjon-tester',
        template: rjon_tester_pug_1.string,
        animations: prefx_1.fxArray
    }),
    __metadata("design:paramtypes", [AppData_1.AppData, http_1.Http])
], RjonTester);
exports.RjonTester = RjonTester;
//# sourceMappingURL=RjonTester.component.js.map