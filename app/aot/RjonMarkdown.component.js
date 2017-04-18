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
var prefx_1 = require("./prefx");
var AppData_1 = require("./AppData");
var rjonHelper = require("./rjonHelper");
var rjon_markdown_pug_1 = require("./templates/rjon-markdown.pug");
var core_1 = require("@angular/core");
var RjonMarkdown = (function () {
    function RjonMarkdown(AppData) {
        this.AppData = AppData;
        this.statIconMap = rjonHelper.statIconMap;
        this.onChange = new core_1.EventEmitter();
    }
    RjonMarkdown.prototype.serverUrlByRoute = function (host, route, sample) {
        return rjonHelper.serverUrlByRoute(host, route, sample);
    };
    RjonMarkdown.prototype.defToArray = function (sample) {
        return rjonHelper.defToArray(sample);
    };
    return RjonMarkdown;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RjonMarkdown.prototype, "rjon", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RjonMarkdown.prototype, "onChange", void 0);
RjonMarkdown = __decorate([
    core_1.Component({
        selector: 'rjon-markdown',
        template: rjon_markdown_pug_1.string,
        animations: prefx_1.fxArray
    }),
    __metadata("design:paramtypes", [AppData_1.AppData])
], RjonMarkdown);
exports.RjonMarkdown = RjonMarkdown;
//# sourceMappingURL=RjonMarkdown.component.js.map