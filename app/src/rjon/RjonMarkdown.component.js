"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prefx_1 = require("./prefx");
var rjonHelper = require("./rjonHelper");
var statIconMap_1 = require("./statIconMap");
var rjon_markdown_pug_1 = require("./templates/rjon-markdown.pug");
var core_1 = require("@angular/core");
var RjonMarkdown = /** @class */ (function () {
    function RjonMarkdown() {
    }
    RjonMarkdown.prototype.serverUrlByRoute = function (host, route, sample) {
        return rjonHelper.serverUrlByRoute(host, route, sample);
    };
    /* deprecated */
    /* deprecated */
    RjonMarkdown.prototype.defToArray = /* deprecated */
    function (sample) {
        return rjonHelper.defToArray(sample);
    };
    RjonMarkdown.prototype.deleteRoute = function (route) {
        for (var x = this.rjon.routes.length - 1; x >= 0; --x) {
            if (this.rjon.routes[x] == route) {
                this.rjon.routes.splice(x, 1);
                this.onChange.emit();
                return;
            }
        }
    };
    RjonMarkdown.prototype.deleteHost = function (host) {
        for (var x = this.rjon.hosts.length - 1; x >= 0; --x) {
            if (this.rjon.hosts[x] == host) {
                this.rjon.hosts.splice(x, 1);
                this.onChange.emit();
                return;
            }
        }
    };
    return RjonMarkdown;
}());
exports.RjonMarkdown = RjonMarkdown;
//# sourceMappingURL=RjonMarkdown.component.js.map