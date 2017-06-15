"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<error-well [error]=\"error\"></error-well><br/><label>Select Host</label><select class=\"width-full\" (change)=\"setHostByIndex($event.target.value)\"><option></option><option *ngFor=\"let host of AppData.rjon.hosts; let i=index\" [value]=\"i\" [selected]=\"host.hostname==(hostModel&amp;&amp;hostModel.hostname)\">{{ host.protocol || (host.port==443?'https':'http') }}://{{ host.hostname }}:{{ host.port || 80 }}</option></select><br/><div class=\"pad-top flex text-center\" *ngIf=\"hostModel\" [@500]=\"'fadeInUp'\"><a class=\"flex-1 pad-xs text-white\" (click)=\"runTest()\" [ngClass]=\"testing?'bg-grey-6x':'bg-calm'\">Run Test{{ actualTestRoutes.length > 1 ? 's' : '' }}</a></div><div class=\"pad-top\" *ngIf=\"testing\" [@500]=\"'fadeInUp'\"><div class=\"fa fa-spinner fa-spin fa-lg\"></div>&nbsp;Testing...</div><div class=\"pad-top child-margin-xxs child-pad-xxs text-sm\"><div *ngFor=\"let log of testlog\" [ngClass]=\"'bg-'+(log.type=='error'?'danger':log.type)\" [@500]=\"'fadeInUp'\"><span *ngIf=\"log.test?.time!=null\">{{ log.test.time }}ms&nbsp;</span>{{ log.message }}</div></div><br/><h4 class=\"margin-bottom-0\">Table of Tests</h4><table-of-routes [routes]=\"actualRoutes\"></table-of-routes>";
//# sourceMappingURL=rjon-tester.pug.js.map