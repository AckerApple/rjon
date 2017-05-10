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
var ack_angular_1 = require("ack-angular");
var core_1 = require("@angular/core");
var prefx_1 = require("./prefx");
var AppData_1 = require("./AppData");
var overview_component_pug_1 = require("./templates/overview-component.pug");
var OverviewComponent = (function () {
    function OverviewComponent(AppData, AckOffline) {
        this.AppData = AppData;
        this.AckOffline = AckOffline;
    }
    OverviewComponent.prototype.loadByOfflineName = function (name) {
        //this.saveOfflineName = name
        if (!name)
            return;
        this.AppData.setRjonString(this.AppData.rjonSaves[name]);
    };
    OverviewComponent.prototype.setSaveRjonStringAs = function (string, name) {
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
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    core_1.Component({
        selector: 'overview-component',
        template: overview_component_pug_1.string,
        animations: prefx_1.fxArray
    }),
    __metadata("design:paramtypes", [AppData_1.AppData, ack_angular_1.AckOffline])
], OverviewComponent);
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=OverviewComponent.component.js.map