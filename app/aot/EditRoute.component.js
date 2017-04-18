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
var edit_route_pug_1 = require("./templates/edit-route.pug");
var ack_angular_1 = require("ack-angular");
var pipes_class_1 = require("ack-angular/pipes.class");
var rjonHelper = require("./rjonHelper");
var EditRoute = (function () {
    function EditRoute(AckApi) {
        this.AckApi = AckApi;
        this.statIconMap = rjonHelper.statIconMap;
        this.onChange = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
    }
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
        this.route.sample.push({});
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
    return EditRoute;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EditRoute.prototype, "route", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EditRoute.prototype, "hosts", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EditRoute.prototype, "hostModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditRoute.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditRoute.prototype, "onClose", void 0);
EditRoute = __decorate([
    core_1.Component({
        selector: 'edit-route',
        template: edit_route_pug_1.string,
        animations: prefx_1.fxArray
    }),
    __metadata("design:paramtypes", [ack_angular_1.AckApi])
], EditRoute);
exports.EditRoute = EditRoute;
//# sourceMappingURL=EditRoute.component.js.map