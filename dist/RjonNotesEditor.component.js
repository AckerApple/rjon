"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var prefx_1 = require("./prefx");
var rjon_notes_editor_pug_1 = require("./templates/rjon-notes-editor.pug");
var RjonNotesEditor = /** @class */ (function () {
    function RjonNotesEditor() {
    }
    RjonNotesEditor.prototype.add = function () {
        this.data = this.data || [];
        this.data.push('');
        this.dataChange.emit(this.data);
    };
    return RjonNotesEditor;
}());
exports.RjonNotesEditor = RjonNotesEditor;
//# sourceMappingURL=RjonNotesEditor.component.js.map