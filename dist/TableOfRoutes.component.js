"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var table_of_routes_pug_1 = require("./templates/table-of-routes.pug");
var statIconMap_1 = require("./statIconMap");
var prefx_1 = require("./prefx");
var TableOfRoutes = (function () {
    function TableOfRoutes() {
        this.statIconMap = statIconMap_1.statIconMap;
        this.links = false;
        this.selectable = false;
        this.select = new core_1.EventEmitter();
    }
    TableOfRoutes.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'table-of-routes',
                    template: table_of_routes_pug_1.string,
                    animations: prefx_1.fxArray
                },] },
    ];
    /** @nocollapse */
    TableOfRoutes.ctorParameters = function () { return []; };
    TableOfRoutes.propDecorators = {
        "links": [{ type: core_1.Input },],
        "routes": [{ type: core_1.Input },],
        "selectable": [{ type: core_1.Input },],
        "select": [{ type: core_1.Output },],
    };
    return TableOfRoutes;
}());
exports.TableOfRoutes = TableOfRoutes;
//# sourceMappingURL=TableOfRoutes.component.js.map