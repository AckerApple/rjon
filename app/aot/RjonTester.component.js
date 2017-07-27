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
var rjonTester_1 = require("./rjon/rjonTester");
var prefx_1 = require("./rjon/prefx");
var RjonTester = (function () {
    function RjonTester(AppData, http) {
        var _this = this;
        this.AppData = AppData;
        this.http = http;
        this.testlog = [];
        this.testing = false;
        this.myTester = new rjonTester_1.Tester();
        this.testGroups = [];
        this.testRoutes = [];
        this.testRoutesChange = new core_1.EventEmitter();
        this.actualRoutes = [];
        this.actualRoutesChange = new core_1.EventEmitter();
        this.actualTestRoutes = [];
        this.actualTestRoutesChange = new core_1.EventEmitter();
        this.hostModelChange = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
        this.myTester.log = function (options) { return _this.testlog.push(options); };
        this.myTester.requestSampleRoute = function (sample, route, options) {
            options = options || {};
            options.host = options.host || 'localhost';
            var simplePath = rjonTester_1.Tester.getRouteSamplePath(route, sample);
            var protocol = _this.hostModel.protcol || (_this.hostModel.port == 443 ? 'https' : 'http');
            var url = protocol + '://' + _this.hostModel.hostname + ':' + _this.hostModel.port + simplePath;
            var reqops = {
                method: route.method || 'GET',
                body: sample.request || sample.post
            };
            //send request
            return _this.http.request(url, reqops).toPromise()
                .then(function (response) { return _this.parseResponse(response); })
                .catch(function (response) { return Promise.reject(_this.parseResponse(response)); });
        };
    }
    RjonTester.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.ref = Object.assign(_this, _this.ref);
            _this.refChange.emit(_this.ref);
        }, 0);
    };
    RjonTester.prototype.parseResponse = function (response) {
        if (response['data'])
            return response;
        if (response.headers.get('Content-Type') == 'application/json') {
            try {
                response['data'] = JSON.parse(response.body || response._body);
            }
            catch (e) { }
        }
        return response;
    };
    RjonTester.prototype.ngOnInit = function () {
        var _this = this;
        return this.AppData.load.then(function () {
            if (!_this.AppData.rjon || !_this.AppData.rjon.routes)
                return;
            //routes with tests
            _this.testRoutes = rjonTester_1.Tester.getRouteTests(_this.AppData.rjon.routes);
            _this.testGroups = rjonTester_1.Tester.getTestGroups(_this.AppData.rjon.routes);
            _this.filterRoutes();
            _this.testRoutesChange.emit(_this.testRoutes);
            _this.actualRoutesChange.emit(_this.actualTestRoutes);
            _this.hostModel = _this.getDefaultHostModel();
        });
    };
    RjonTester.prototype.filterRoutes = function () {
        var routes = rjonTester_1.Tester.getRoutesWithActualTests(this.AppData.rjon.routes);
        this.reduceRoutesByGroup(routes, this.testGroup);
        this.actualTestRoutesChange.emit(this.actualRoutes = routes);
        this.actualTestRoutes = rjonTester_1.Tester.getRouteActualTests(routes);
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
        var _this = this;
        if (this.testing)
            return;
        this.testlog.length = 0;
        this.testing = true;
        return this.myTester.testRoutes(this.actualRoutes, this.hostModel)
            .catch(function (e) { return console.log(_this.error = e); })
            .then(function () { return _this.testing = false; });
    };
    RjonTester.prototype.reduceRoutesByGroup = function (routes, group) {
        if (!group)
            return routes;
        for (var x = routes.length - 1; x >= 0; --x) {
            if (!routes[x].groupNames) {
                routes.splice(x, 1);
                continue;
            }
            if (routes[x].groupNames.indexOf(this.testGroup) < 0) {
                routes.splice(x, 1);
            }
        }
        return routes;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RjonTester.prototype, "testRoutes", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RjonTester.prototype, "testRoutesChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RjonTester.prototype, "actualRoutes", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RjonTester.prototype, "actualRoutesChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RjonTester.prototype, "actualTestRoutes", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RjonTester.prototype, "actualTestRoutesChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RjonTester.prototype, "hostModelChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RjonTester.prototype, "ref", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RjonTester.prototype, "refChange", void 0);
    RjonTester = __decorate([
        core_1.Component({
            selector: 'rjon-tester',
            template: rjon_tester_pug_1.string,
            animations: prefx_1.fxArray
        }),
        __metadata("design:paramtypes", [AppData_1.AppData, http_1.Http])
    ], RjonTester);
    return RjonTester;
}());
exports.RjonTester = RjonTester;
//# sourceMappingURL=RjonTester.component.js.map