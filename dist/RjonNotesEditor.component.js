"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var prefx_1 = require("./prefx");
var rjon_notes_editor_pug_1 = require("./templates/rjon-notes-editor.pug");
var RjonNotesEditor = /** @class */ (function () {
    function RjonNotesEditor() {
        this.dataChange = new core_1.EventEmitter();
    }
    RjonNotesEditor.prototype.add = function () {
        this.data = this.data || [];
        this.data.push('');
        this.dataChange.emit(this.data);
    };
    RjonNotesEditor.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'rjon-notes-editor',
                    template: rjon_notes_editor_pug_1.string,
                    animations: prefx_1.fxArray
                },] },
    ];
    /** @nocollapse */
    RjonNotesEditor.ctorParameters = function () { return []; };
    RjonNotesEditor.propDecorators = {
        'data': [{ type: core_1.Input },],
        'dataChange': [{ type: core_1.Output },],
    };
    return RjonNotesEditor;
}());
exports.RjonNotesEditor = RjonNotesEditor;
//# sourceMappingURL=RjonNotesEditor.component.js.map