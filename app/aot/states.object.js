"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var Overview = (function () {
    function Overview() {
    }
    return Overview;
}());
Overview = __decorate([
    core_1.Component({ template: '' })
], Overview);
exports.Overview = Overview;
var Builder = (function () {
    function Builder() {
    }
    return Builder;
}());
Builder = __decorate([
    core_1.Component({ template: '' })
], Builder);
exports.Builder = Builder;
var Reviewing = (function () {
    function Reviewing() {
    }
    return Reviewing;
}());
Reviewing = __decorate([
    core_1.Component({ template: '' })
], Reviewing);
exports.Reviewing = Reviewing;
var Testing = (function () {
    function Testing() {
    }
    return Testing;
}());
Testing = __decorate([
    core_1.Component({ template: '' })
], Testing);
exports.Testing = Testing;
exports.declarations = [
    Overview,
    Builder,
    Reviewing,
    Testing
];
exports.routes = [
    { name: 'overview', path: 'overview', component: Overview },
    { name: 'builder', path: 'builder', component: Builder },
    { name: 'reviewing', path: 'reviewing', component: Reviewing },
    { name: 'testing', path: 'testing', component: Testing },
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: '**', redirectTo: 'overview' } //404
];
exports.routeConfig = { useHash: true, initialNavigation: true, enableTracing: false };
exports.routing = router_1.RouterModule.forRoot(exports.routes, exports.routeConfig);
//# sourceMappingURL=states.object.js.map