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
        this.compareResults = {
            add: { hosts: [], routes: [] },
            drop: { hosts: [], routes: [] }
        };
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
    OverviewComponent.prototype.compareRjon = function (rjonString) {
        //this.viewRjonMerge = !this.viewRjonMerge
        if (this.viewRjonMergeResults)
            return this.viewRjonMergeResults = false;
        this.viewRjonMergeResults = true;
        try {
            this.rjonMerge = JSON.parse(rjonString);
            this.compareResults = this.getRjonCompare(this.AppData.rjon, this.rjonMerge);
        }
        catch (e) {
            this.rjonMerge = null;
            this.compareResults = null;
            this.mergeError = e;
        }
    };
    OverviewComponent.prototype.mergeRjon = function (rjonString) {
        try {
            var rjon = JSON.parse(rjonString);
            var save = this.getRjonMerge(this.AppData.rjon, rjon);
            this.AppData.setSaveRjon(this.AppData.rjon);
        }
        catch (e) {
            console.log('e', e);
            this.mergeError = e;
        }
    };
    OverviewComponent.prototype.dedup = function () {
        var _this = this;
        this.AppData.rjon.routes.forEach(function (route, i) {
            for (var x = _this.AppData.rjon.routes.length - 1; x >= 0; --x) {
                if (_this.AppData.rjon.routes[i] == _this.AppData.rjon.routes[x]) {
                    continue;
                }
                if (route.path == _this.AppData.rjon.routes[x].path) {
                    _this.AppData.rjon.routes.splice(x, 1);
                }
            }
        });
        this.AppData.rjon.hosts.forEach(function (host, i) {
            for (var x = _this.AppData.rjon.hosts.length - 1; x >= 0; --x) {
                if (_this.AppData.rjon.hosts[i] == _this.AppData.rjon.hosts[x]) {
                    continue;
                }
                if (host.hostname == _this.AppData.rjon.hosts[x].hostname) {
                    _this.AppData.rjon.hosts.splice(x, 1);
                }
            }
        });
        this.AppData.setSaveRjon(this.AppData.rjon);
    };
    OverviewComponent.prototype.getRjonCompare = function (rjon0, rjon1) {
        var drop = { routes: [], hosts: [] };
        var add = { routes: [], hosts: [] };
        if (rjon1.routes && rjon0.routes) {
            rjon1.routes.forEach(function (route) {
                for (var x = rjon0.routes.length - 1; x >= 0; --x) {
                    if (rjon0.routes[x].path == route.path && rjon0.routes[x].method == route.method) {
                        return;
                    }
                }
                add.routes.push(route);
            });
            rjon0.routes.forEach(function (route) {
                for (var x = rjon0.routes.length - 1; x >= 0; --x) {
                    if (rjon1.routes[x].path == route.path && rjon1.routes[x].method == route.method) {
                        return;
                    }
                }
                drop.routes.push(route);
            });
        }
        if (rjon1.hosts && rjon0.hosts) {
            rjon1.hosts.forEach(function (host) {
                for (var x = rjon0.hosts.length - 1; x >= 0; --x) {
                    if (rjon0.hosts[x].hostname == host.hostname) {
                        return;
                    }
                }
                add.hosts.push(host);
            });
            rjon0.hosts.forEach(function (host) {
                for (var x = rjon1.hosts.length - 1; x >= 0; --x) {
                    if (rjon1.hosts[x].hostname == host.hostname) {
                        return;
                    }
                }
                drop.hosts.push(host);
            });
        }
        return { add: add, drop: drop };
    };
    OverviewComponent.prototype.getRjonMerge = function (rjon0, rjon1) {
        rjon1.routes.forEach(function (route) {
            for (var x = rjon0.routes.length - 1; x >= 0; --x) {
                if (route.path == route.pathj) {
                    return Object.assign(rjon0.routes[x], route);
                }
            }
            rjon0.routes.push(route);
        });
        rjon1.hosts.forEach(function (host) {
            for (var x = rjon0.hosts.length - 1; x >= 0; --x) {
                if (host.hostname == host.hostnamej) {
                    return Object.assign(rjon0.hosts[x], host);
                }
            }
            rjon0.hosts.push(host);
        });
        return rjon0;
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