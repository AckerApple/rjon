"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prefx_1 = require("./prefx");
var rjonHelper = require("./rjonHelper");
var statIconMap_1 = require("./statIconMap");
var rjon_markdown_pug_1 = require("./templates/rjon-markdown.pug");
var core_1 = require("@angular/core");
var RjonMarkdown = (function () {
    function RjonMarkdown() {
        this.statIconMap = statIconMap_1.statIconMap;
        this.onChange = new core_1.EventEmitter();
    }
    RjonMarkdown.prototype.serverUrlByRoute = function (host, route, sample) {
        return rjonHelper.serverUrlByRoute(host, route, sample);
    };
    /* deprecated */
    RjonMarkdown.prototype.defToArray = function (sample) {
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
    return RjonMarkdown;
}());
RjonMarkdown.decorators = [
    { type: core_1.Component, args: [{
                selector: 'rjon-markdown',
                template: rjon_markdown_pug_1.string,
                animations: prefx_1.fxArray
            },] },
];
/** @nocollapse */
RjonMarkdown.ctorParameters = function () { return []; };
RjonMarkdown.propDecorators = {
    'rjon': [{ type: core_1.Input },],
    'onChange': [{ type: core_1.Output },],
};
exports.RjonMarkdown = RjonMarkdown;
//# sourceMappingURL=RjonMarkdown.component.js.map