"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<table class=\"table-hover-energized width-full table-pad-xs border-collapse table-striped\"><tr><td>icon</td><td>name</td><td>details</td></tr><tr class=\"cursor-pointer\" *ngFor=\"let key of statIconMap|keys\" [ngClass]=\"(activeIcons|array).indexOf(key)&gt;=0?'bg-success':null\" (click)=\"onClick.emit(key)\"><td>{{ statIconMap[key].icon }}</td><td>{{ key | uppercase }}</td><td>{{ statIconMap[key].details }}</td></tr></table>";
//# sourceMappingURL=icon-table.pug.js.map