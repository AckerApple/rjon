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
//import * as ack from "ack-x/index-browser"
var core_1 = require("@angular/core");
var AppData = (function () {
    function AppData(AckOffline, ErrorLog) {
        var _this = this;
        this.AckOffline = AckOffline;
        this.ErrorLog = ErrorLog;
        this.invalidRjon = true;
        this.invalidJson = true;
        this.saving = false;
        this.data = {};
        this.rjonSaves = {};
        this.rjon = { routes: [], hosts: [] };
        this.rjonChange = new core_1.EventEmitter();
        this.rjonString = '{"routes":[], "hosts":[]}';
        this.rjonStringChange = new core_1.EventEmitter();
        this.load = this.AckOffline.get('rjon')
            .then(function (rjon) {
            _this.data = rjon && rjon['string'] ? rjon : { string: '' };
            _this.setRjonString(_this.data['string']);
        })
            .then(function () { return _this.loadOfflineSaves(); })
            .catch(function (e) { return _this.error = e; });
    }
    AppData.prototype.loadOfflineSaves = function () {
        var _this = this;
        return this.AckOffline.get('rjonSaves')
            .then(function (rjonSaves) { return _this.rjonSaves = rjonSaves; });
    };
    AppData.prototype.setSaveRjon = function (rjon) {
        var _this = this;
        this.rjon = rjon;
        this.rjonChange.emit(this.rjon);
        var promise = Promise.resolve();
        if (rjon.name) {
            promise = promise.then(function () { return _this.saveRjonAs(rjon.name, rjon); });
        }
        return promise.then(function () {
            var string = JSON.stringify(rjon, null, 2);
            _this.rjonString = string;
            _this.rjonStringChange.emit(_this.rjonString);
            return string;
        })
            .then(function (string) { return _this.saveOffline(string); })
            .catch(function (e) { return _this.error = e; });
    };
    AppData.prototype.setRjonString = function (string) {
        this.rjonString = string;
        this.rjonStringChange.emit(this.rjonString);
        this.parseRjonString(this.rjonString);
    };
    AppData.prototype.parseRjonString = function (string) {
        try {
            this.rjon = JSON.parse(string || this.rjonString);
            this.rjonChange.emit(this.rjon);
            this.invalidJson = false;
            this.invalidRjon = !this.isValidRjon(this.rjon);
        }
        catch (e) {
            this.invalidJson = true;
        }
    };
    AppData.prototype.parseAndSave = function (string) {
        this.parseRjonString(string);
        return this.saveOffline();
    };
    AppData.prototype.saveOffline = function (string) {
        var _this = this;
        if (this.saving)
            return;
        this.saving = true;
        setTimeout(function () {
            string = string || _this.rjonString;
            Object.assign(_this.data, { string: string });
            _this.AckOffline.set('rjon', _this.data)
                .catch(function (e) { return _this.error = _this.ErrorLog.add(e); })
                .then(function () { return _this.saving = false; })
                .then(function () { return _this.lastSaveAt = Date.now(); });
        }, 1000);
    };
    AppData.prototype.saveRjonAs = function (name, rjon) {
        var _this = this;
        return this.AckOffline.get('rjonSaves')
            .then(function (rjonSaves) {
            rjonSaves = rjonSaves || {};
            rjon.name = name;
            rjonSaves[name] = JSON.stringify(rjon, null, 2);
            return _this.rjonSaves = rjonSaves;
        })
            .then(function (rjonSaves) { return _this.AckOffline.set('rjonSaves', rjonSaves); })
            .catch(function (e) { return _this.error = e; });
    };
    AppData.prototype.isValidRjon = function (ob) {
        return ob.routes && ob.hosts ? true : false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AppData.prototype, "rjon", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AppData.prototype, "rjonChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AppData.prototype, "rjonString", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AppData.prototype, "rjonStringChange", void 0);
    AppData = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ack_angular_1.AckOffline, ack_angular_1.ErrorLog])
    ], AppData);
    return AppData;
}());
exports.AppData = AppData;
//# sourceMappingURL=AppData.js.map