"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rjon_header_editor_pug_1 = require("./templates/rjon-header-editor.pug");
var prefx_1 = require("./prefx");
var RjonHeaderEditor = /** @class */ (function () {
    function RjonHeaderEditor() {
    }
    RjonHeaderEditor.prototype.add = function () {
        this.data = this.data || {};
        this.data['header' + Object.keys(this.data).length] = '';
        this.dataChange.emit(this.data);
    };
    RjonHeaderEditor.prototype.drop = function (key) {
        delete this.data[key];
        this.dataChange.emit(this.data);
    };
    RjonHeaderEditor.prototype.getKeys = function () {
        return this.data ? Object.keys(this.data) : [];
    };
    return RjonHeaderEditor;
}());
exports.RjonHeaderEditor = RjonHeaderEditor;
//# sourceMappingURL=RjonHeaderEditor.component.js.map