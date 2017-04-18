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
var core_1 = require("@angular/core");
var prefx_1 = require("./prefx");
var test_route_pug_1 = require("./templates/test-route.pug");
var ack_angular_1 = require("ack-angular");
var rjonHelper = require("./rjonHelper");
var TestRoute = (function () {
    function TestRoute(AckApi) {
        this.AckApi = AckApi;
        this.rjonHelper = rjonHelper;
        this.sending = 0;
        this.headers = {
            'Content-Type': 'application/json'
        };
        this.hostModelChange = new core_1.EventEmitter();
    }
    TestRoute.prototype.ngOnInit = function () {
        var _this = this;
        this.pathModel = this.route.path;
        this.methodModel = this.route.method;
        this.bodyModel = this.getDefaultBodyModel();
        this.hostModel = this.getDefaultHostModel();
        setTimeout(function () { return _this.hostModelChange.emit(_this.hostModel); }, 0);
    };
    TestRoute.prototype.getDefaultHostModel = function () {
        if (this.hostModel)
            return this.hostModel;
        if (this.hosts && this.hosts.length) {
            return this.hosts[0];
        }
    };
    TestRoute.prototype.setHostByIndex = function (index) {
        this.hostModel = this.hosts[index];
        this.hostModelChange.emit(this.hostModel);
    };
    TestRoute.prototype.getDefaultBodyModel = function () {
        var firstSample = rjonHelper.defToArray(this.route.sample);
        var rtn = this.bodyModel || (firstSample.length && firstSample[0].request);
        return rtn ? JSON.stringify(rtn, null, 2) : '';
    };
    TestRoute.prototype.setBodyObject = function (ob) {
        this.loadSample = null;
        this.bodyModel = JSON.stringify(ob, null, 2);
    };
    TestRoute.prototype.trySend = function () {
        this.tryingSend = true;
        this.response = null;
        this.error = null;
        if (this.hostModel) {
            this.send();
        }
    };
    TestRoute.prototype.send = function () {
        var _this = this;
        var port = this.hostModel.port || 80;
        var protocol = this.hostModel.hostname.search(/^http(s)?:/) >= 0 ? '' : 'http://';
        var host = protocol + this.hostModel.hostname;
        var route = (this.pathModel.substring(0, 1) == '/' ? '' : '/') + this.pathModel;
        var url = host + ':' + port + '/' + route;
        var config = {
            method: this.methodModel,
            url: url,
            body: this.bodyModel,
            headers: this.headers,
            promise: 'all'
        };
        ++this.sending;
        this.AckApi.request(config)
            .then(function (response) { return _this.response = response; })
            .catch(function (e) { return _this.error = e; })
            .then(function () { return --_this.sending; })
            .then(function () { return _this.responseView = 'map'; });
    };
    return TestRoute;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TestRoute.prototype, "route", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TestRoute.prototype, "hosts", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TestRoute.prototype, "hostModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TestRoute.prototype, "hostModelChange", void 0);
TestRoute = __decorate([
    core_1.Component({
        selector: 'test-route',
        template: test_route_pug_1.string,
        animations: prefx_1.fxArray
    }),
    __metadata("design:paramtypes", [ack_angular_1.AckApi])
], TestRoute);
exports.TestRoute = TestRoute;
//# sourceMappingURL=TestRoute.component.js.map