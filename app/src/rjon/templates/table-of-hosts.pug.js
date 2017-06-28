"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<div class=\"markdown-body\"><table [class.table-hover-warning]=\"selectable\"><thead><tr><th>PROTOCOL</th><th>HOSTNAME</th><th>PORT</th></tr></thead><tbody><tr *ngFor=\"let host of hosts|array\" (click)=\"select.emit(host)\" [class.cursor-pointer]=\"selectable\"><td>{{ host.protocol || 'http' }}</td><td>{{ host.hostname }}</td><td>{{ host.port }}</td></tr></tbody></table></div>";
//# sourceMappingURL=table-of-hosts.pug.js.map