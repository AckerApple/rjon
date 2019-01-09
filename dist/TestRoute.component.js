"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var prefx_1 = require("./prefx");
var test_route_pug_1 = require("./templates/test-route.pug");
var ack_angular_1 = require("ack-angular");
var rjonHelper = require("./rjonHelper");
/** interface to test a single route */
var TestRoute = (function () {
    function TestRoute(AckApi) {
        this.AckApi = AckApi;
        this.route = {};
        this.spaceSaving = true;
        this.hostModelChange = new core_1.EventEmitter();
        this.onSave = new core_1.EventEmitter();
        this.headersModel = { 'Content-Type': 'application/json' };
        this.contentTypeModel = 'application/json';
        this.rjonHelper = rjonHelper;
        this.sending = 0;
    }
    TestRoute.prototype.ngOnInit = function () {
        var _this = this;
        this.pathModel = this.route['path'];
        this.methodModel = this.route['method'];
        this.bodyModel = this.getDefaultBodyModel();
        //this.hostModel = this.getDefaultHostModel()
        if (this.hostModel) {
            this.applyHostHeaders(this.hostModel);
        }
        this.applyProtocol();
        if (this.headers)
            Object.assign(this.headersModel, this.headers);
        setTimeout(function () {
            _this.route = _this.route || {};
            //this.hostModelChange.emit(this.hostModel)
        }, 0);
    };
    TestRoute.prototype.setContentType = function (type) {
        for (var x in this.headersModel) {
            if (this.headersModel[x].name.toLowerCase() == 'content-type') {
                return this.headersModel[x] = type;
            }
        }
        this.headersModel['Content-Type'] = type;
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
        this.applyHostHeaders(this.hostModel);
        if (!this.protocolModel)
            this.applyProtocol();
    };
    TestRoute.prototype.applyHostHeaders = function (host) {
        if (host && host.headers) {
            Object.assign(this.headersModel, host.headers);
        }
    };
    TestRoute.prototype.applyProtocol = function () {
        if (!this.hostModel || !this.hostModel.protocol)
            return;
        this.protocolModel = this.hostModel.protocol;
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
        this.send();
    };
    TestRoute.prototype.getProtocol = function () {
        if (this.hostModel.hostname.search(/^http(s)?:/) >= 0)
            return '';
        return (this.protocolModel || this.hostModel.protocol || (this.hostModel.port == 443 ? 'https' : 'http')) + '://';
    };
    TestRoute.prototype.send = function () {
        var _this = this;
        var port = 80;
        var host = "";
        var route = this.pathModel;
        if (this.hostModel) {
            var protocol = this.getProtocol();
            port = this.hostModel.port || port;
            host = protocol + this.hostModel.hostname + ':' + port;
            route = (this.pathModel.substring(0, 1) == '/' ? '' : '/') + this.pathModel;
        }
        var url = host + route;
        console.log("url", url);
        var config = {
            method: this.methodModel,
            url: url,
            body: this.bodyModel,
            headers: this.headersModel,
            promise: 'all'
        };
        ++this.sending;
        this.AckApi.request(config)
            .then(function (response) { return _this.response = response; })
            .catch(function (e) { return console.log(_this.error = e); })
            .then(function () { return --_this.sending; })
            .then(function () { return _this.responseView = 'map'; });
    };
    TestRoute.prototype.save = function () {
        this.route.path = this.pathModel;
        this.route.method = this.methodModel;
        if (this.bodyModel) {
            this.route.sample = this.route.sample || [{}];
            this.route.sample[0].body = this.bodyModel;
        }
        this.lastSave = Date.now();
        this.onSave.emit(this.route);
    };
    TestRoute.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'test-route',
                    template: test_route_pug_1.string,
                    animations: prefx_1.fxArray
                },] },
    ];
    /** @nocollapse */
    TestRoute.ctorParameters = function () { return [
        { type: ack_angular_1.AckApi, },
    ]; };
    TestRoute.propDecorators = {
        "route": [{ type: core_1.Input },],
        "headers": [{ type: core_1.Input },],
        "hosts": [{ type: core_1.Input },],
        "spaceSaving": [{ type: core_1.Input },],
        "hostModel": [{ type: core_1.Input },],
        "hostModelChange": [{ type: core_1.Output },],
        "onSave": [{ type: core_1.Output },],
    };
    return TestRoute;
}());
exports.TestRoute = TestRoute;
//# sourceMappingURL=TestRoute.component.js.map