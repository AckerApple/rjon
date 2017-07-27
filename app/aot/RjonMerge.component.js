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
var prefx_1 = require("./rjon/prefx");
var AppData_1 = require("./AppData");
var rjon_merge_pug_1 = require("./templates/rjon-merge.pug");
var pipes_class_1 = require("ack-angular/pipes.class");
var RjonMerge = (function () {
    function RjonMerge(AppData) {
        this.AppData = AppData;
        this.rjonMerge = {};
        this.compareResults = {
            add: { hosts: [], routes: [] },
            drop: { hosts: [], routes: [] }
        };
        this.onMerge = new core_1.EventEmitter();
    }
    RjonMerge.prototype.compareRjon = function (rjonString) {
        //this.viewRjonMerge = !this.viewRjonMerge
        if (this.viewRjonMergeResults)
            return this.viewRjonMergeResults = false;
        this.viewRjonMergeResults = true;
        try {
            rjonString = rjonString.replace(/\u003d/g, '&');
            this.rjonMerge = JSON.parse(rjonString);
            this.compareResults = this.getRjonCompare(this.AppData.rjon, this.rjonMerge);
        }
        catch (e) {
            this.rjonMerge = null;
            this.compareResults = null;
            this.mergeError = e;
            console.log(e);
        }
    };
    RjonMerge.prototype.mergeRjon = function (rjonString) {
        try {
            rjonString = rjonString.replace(/\u003d/g, '&');
            var rjon = JSON.parse(rjonString);
            var save = this.getRjonMerge(this.AppData.rjon, rjon);
            this.AppData.setSaveRjon(this.AppData.rjon);
        }
        catch (e) {
            console.log(e);
            this.mergeError = e;
        }
    };
    RjonMerge.prototype.getRjonCompare = function (rjon0, rjon1) {
        var drop = { routes: [], hosts: [] };
        var add = { routes: [], hosts: [] };
        if (rjon1.routes && rjon0.routes) {
            rjon1.routes.forEach(function (route) {
                for (var x = 0; x < rjon0.routes.length; ++x) {
                    if (rjon0.routes[x].path == route.path && rjon0.routes[x].method == route.method) {
                        return;
                    }
                }
                add.routes.push(route);
            });
            rjon0.routes.forEach(function (route) {
                for (var x = 0; x < rjon1.routes.length; ++x) {
                    if (rjon1.routes[x].path == route.path && rjon1.routes[x].method == route.method) {
                        return;
                    }
                }
                drop.routes.push(route);
            });
        }
        if (rjon1.hosts && rjon0.hosts) {
            rjon1.hosts.forEach(function (host) {
                for (var x = 0; x < rjon0.hosts.length; ++x) {
                    if (rjon0.hosts[x].hostname == host.hostname) {
                        return;
                    }
                }
                add.hosts.push(host);
            });
            rjon0.hosts.forEach(function (host) {
                for (var x = 0; x < rjon1.hosts.length; ++x) {
                    if (rjon1.hosts[x].hostname == host.hostname) {
                        return;
                    }
                }
                drop.hosts.push(host);
            });
        }
        return { add: add, drop: drop };
    };
    RjonMerge.prototype.mergeRoutes = function (route0, route1) {
        if (route1.sample && route0.sample) {
            var sample0Array = pipes_class_1.array(route0.sample);
            var sample1Array = pipes_class_1.array(route1.sample);
            for (var x = sample1Array.length - 1; x >= 0; --x) {
                if (sample0Array.length < x)
                    sample0Array.push({});
                if (sample0Array[x].test && sample1Array[x].test) {
                    Object.assign(sample1Array[x].test, sample0Array[x].test);
                }
                Object.assign(sample1Array[x], sample0Array[x]);
            }
            route1.sample = route0.sample;
        }
        else if (route0.sample) {
            route1.sample = route0.sample;
        }
        Object.assign(route0, route1);
    };
    RjonMerge.prototype.getRjonMerge = function (rjon0, rjon1) {
        var _this = this;
        rjon1.routes.forEach(function (route) {
            for (var x = 0; x < rjon0.routes.length; ++x) {
                if (rjon0.routes[x].path == route.path && rjon0.routes[x].method == route.method) {
                    return _this.mergeRoutes(rjon0.routes[x], route);
                }
            }
            rjon0.routes.push(route);
        });
        rjon1.hosts.forEach(function (host) {
            for (var x = 0; x < rjon0.hosts.length; ++x) {
                if (rjon0.hosts[x].hostname == host.hostname) {
                    return Object.assign(rjon0.hosts[x], host);
                }
            }
            rjon0.hosts.push(host);
        });
        return rjon0;
    };
    RjonMerge.prototype.dropRoute = function (route) {
        for (var i = this.AppData.rjon.routes.length - 1; i >= 0; --i) {
            var iRoute = this.AppData.rjon.routes[i];
            if (route == iRoute) {
                return this.AppData.rjon.routes.splice(i, 1);
            }
        }
    };
    RjonMerge.prototype.dedup = function () {
        var _this = this;
        this.AppData.rjon.routes.forEach(function (route, i) {
            for (var x = 0; x < _this.AppData.rjon.routes.length; ++x) {
                if (_this.AppData.rjon.routes[i] == _this.AppData.rjon.routes[x]) {
                    continue;
                }
                if (route.path == _this.AppData.rjon.routes[x].path) {
                    _this.AppData.rjon.routes.splice(x, 1);
                }
            }
        });
        this.AppData.rjon.hosts.forEach(function (host, i) {
            for (var x = 0; x < _this.AppData.rjon.hosts.length; ++x) {
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
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RjonMerge.prototype, "onMerge", void 0);
    RjonMerge = __decorate([
        core_1.Component({
            selector: 'rjon-merge',
            template: rjon_merge_pug_1.string,
            animations: prefx_1.fxArray
        }),
        __metadata("design:paramtypes", [AppData_1.AppData])
    ], RjonMerge);
    return RjonMerge;
}());
exports.RjonMerge = RjonMerge;
//# sourceMappingURL=RjonMerge.component.js.map