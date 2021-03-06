"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var prefx_1 = require("./prefx");
var edit_route_pug_1 = require("./templates/edit-route.pug");
var pipes_class_1 = require("ack-angular/pipes.class");
var statIconMap_1 = require("./statIconMap");
var rjonTester_1 = require("./rjonTester");
var EditRoute = (function () {
    function EditRoute() {
        this.statIconMap = statIconMap_1.statIconMap;
        this.testGroups = [];
        this.onChange = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
    }
    EditRoute.prototype.ngOnInit = function () {
        if (this.routes)
            this.testGroups = rjonTester_1.Tester.getTestGroups(this.routes);
    };
    EditRoute.prototype.toggleRouteStatus = function (status) {
        this.route.status = this.route.status || [];
        this.route.status = pipes_class_1.pipes.array(this.route.status);
        var index = this.route.status.indexOf(status);
        if (index >= 0) {
            this.route.status.splice(index, 1);
        }
        else {
            this.route.status.push(status);
        }
        this.onChange.emit();
    };
    EditRoute.prototype.addNote = function () {
        this.route.notes = pipes_class_1.pipes.array(this.route.notes);
        this.route.notes.push('');
    };
    EditRoute.prototype.addSample = function () {
        this.route.sample = pipes_class_1.pipes.array(this.route.sample);
        this.route.sample.push({ title: null, timeout: null, statusCode: null, only: null, skip: null });
    };
    EditRoute.prototype.addSampleTest = function (sample) {
        sample.test = pipes_class_1.pipes.array(sample.test);
        sample.test.push({});
    };
    EditRoute.prototype.setSampleBody = function (sample, value) {
        sample.request = JSON.parse(value);
    };
    EditRoute.prototype.setTestBody = function (test, value) {
        test.body = JSON.parse(value);
    };
    EditRoute.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'edit-route',
                    template: edit_route_pug_1.string,
                    animations: prefx_1.fxArray
                },] },
    ];
    /** @nocollapse */
    EditRoute.ctorParameters = function () { return []; };
    EditRoute.propDecorators = {
        "route": [{ type: core_1.Input },],
        "routes": [{ type: core_1.Input },],
        "hosts": [{ type: core_1.Input },],
        "hostModel": [{ type: core_1.Input },],
        "onChange": [{ type: core_1.Output },],
        "onClose": [{ type: core_1.Output },],
    };
    return EditRoute;
}());
exports.EditRoute = EditRoute;
//# sourceMappingURL=EditRoute.component.js.map