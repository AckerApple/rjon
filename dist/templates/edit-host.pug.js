"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<h3>Edit Host : {{ hostModel.hostname }}</h3><form (onFormChanged)=\"onChange.emit(route)\"><div class=\"flex-wrap child-margin-xxs child-margin-bottom\"><div class=\"flex-1\"><label>Host Name</label><input class=\"width-full\" [(ngModel)]=\"hostModel.hostname\" name=\"hostModel.hostname\"/></div><div class=\"flex-1\"><label>Protocol</label><input class=\"width-full\" [(ngModel)]=\"hostModel.protocol\" name=\"hostModel.protocol\"/></div><div class=\"flex-1\"><label>Port</label><input class=\"width-full\" [(ngModel)]=\"hostModel.port\" name=\"hostModel.port\"/></div><div class=\"flex-1\"><label>Description</label><input class=\"width-full\" [(ngModel)]=\"hostModel.description\" name=\"hostModel.description\"/></div></div><div class=\"margin-v\"><label>Notes</label><rjon-notes-editor [data]=\"hostModel.notes\"></rjon-notes-editor></div><div class=\"margin-v\"><label>Headers</label><rjon-header-editor [data]=\"hostModel.headers\"></rjon-header-editor></div></form>";
//# sourceMappingURL=edit-host.pug.js.map