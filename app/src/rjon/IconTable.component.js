"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var statIconMap_1 = require("./statIconMap");
var icon_table_pug_1 = require("./templates/icon-table.pug");
var IconTable = /** @class */ (function () {
    function IconTable() {
        this.statIconMap = statIconMap_1.statIconMap;
        this.activeIcons = [];
        this.onClick = new core_1.EventEmitter();
    }
    IconTable.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'icon-table',
                    template: icon_table_pug_1.string
                },] },
    ];
    /** @nocollapse */
    IconTable.ctorParameters = function () { return []; };
    IconTable.propDecorators = {
        'activeIcons': [{ type: core_1.Input },],
        'onClick': [{ type: core_1.Output },],
    };
    return IconTable;
}());
exports.IconTable = IconTable;
//# sourceMappingURL=IconTable.component.js.map