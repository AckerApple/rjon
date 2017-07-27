"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestRoute_component_1 = require("./TestRoute.component");
var EditRoute_component_1 = require("./EditRoute.component");
var EditHost_component_1 = require("./EditHost.component");
var RjonMarkdown_component_1 = require("./RjonMarkdown.component");
var RjonHeaderEditor_component_1 = require("./RjonHeaderEditor.component");
var RjonNotesEditor_component_1 = require("./RjonNotesEditor.component");
var nodedump = require("nodedump");
var Dump = (function () {
    function Dump() {
    }
    Dump.prototype.transform = function (input, options) {
        if (options === void 0) { options = {}; }
        //return nodedump(input, options)
        return nodedump.dump(input, Object.assign({ hideTypes: ['Function'] }, options));
    };
    Dump.decorators = [
        { type: core_1.Pipe, args: [{ name: 'dump' },] },
    ];
    /** @nocollapse */
    Dump.ctorParameters = function () { return []; };
    return Dump;
}());
exports.Dump = Dump;
var RjonLinks_component_1 = require("./RjonLinks.component");
var TableOfHosts_component_1 = require("./TableOfHosts.component");
var TableOfRoutes_component_1 = require("./TableOfRoutes.component");
var IconTable_component_1 = require("./IconTable.component");
exports.declarations = [
    TableOfRoutes_component_1.TableOfRoutes,
    IconTable_component_1.IconTable,
    EditRoute_component_1.EditRoute,
    EditHost_component_1.EditHost,
    TestRoute_component_1.TestRoute,
    RjonMarkdown_component_1.RjonMarkdown,
    RjonHeaderEditor_component_1.RjonHeaderEditor,
    RjonNotesEditor_component_1.RjonNotesEditor,
    TableOfHosts_component_1.TableOfHosts,
    Dump,
    RjonLinks_component_1.RjonLinks
];
//# sourceMappingURL=components.js.map