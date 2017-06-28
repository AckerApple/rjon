"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var table_of_hosts_pug_1 = require("./templates/table-of-hosts.pug");
var TableOfHosts = (function () {
    function TableOfHosts() {
        this.selectable = false;
        this.select = new core_1.EventEmitter();
    }
    return TableOfHosts;
}());
TableOfHosts.decorators = [
    { type: core_1.Component, args: [{
                selector: 'table-of-hosts',
                template: table_of_hosts_pug_1.string
            },] },
];
/** @nocollapse */
TableOfHosts.ctorParameters = function () { return []; };
TableOfHosts.propDecorators = {
    'hosts': [{ type: core_1.Input },],
    'selectable': [{ type: core_1.Input },],
    'select': [{ type: core_1.Output },],
};
exports.TableOfHosts = TableOfHosts;
//# sourceMappingURL=TableOfHosts.component.js.map