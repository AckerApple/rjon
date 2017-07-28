"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<div [(screenWidthModel)]=\"screenWidthModel\"></div><route-reporter [(ref)]=\"routeDocWatcher\" (beforeChange)=\"panelAnim=$event.isBackMode?'slideInLeft':'slideInRight';isBackMode=$event.isBackMode;\" (onChange)=\"stateName=$event.current.config.name\"></route-reporter><router-outlet></router-outlet><reader-header-body class=\"font-helvetica\"><reader-header><div class=\"border-grey-3x border-left-1 border-right-1\" style=\"font-size:16px;\" id=\"top\"><div class=\"pad flex-valign-center flex-wrap bg-calm\"><h1 class=\"margin-0\"><span>📚</span>&nbsp;RJON</h1><span class=\"text-right flex-1 text-white\">v{{ version }}</span></div><div class=\"flex-wrap flex-evenly bg-info child-pad-sm text-center text-2x strong child-hover-bg-positive\"><a class=\"no-a-style flex-1 border-right border-white\" [ngClass]=\"{'bg-calm':stateName=='overview'}\" href=\"#/overview\">Overview</a><a class=\"no-a-style flex-1 border-right border-white\" [ngClass]=\"{'bg-calm':stateName=='builder'}\" href=\"#/builder\">Builder</a><a class=\"no-a-style flex-1 border-right border-white\" [ngClass]=\"{'bg-calm':stateName=='reviewing'}\" href=\"#/reviewing\">Reviewing</a><a class=\"no-a-style flex-1 border-right border-white\" [ngClass]=\"{'bg-calm':stateName=='http'}\" href=\"#/http\">HTTP</a><a class=\"no-a-style flex-1\" [ngClass]=\"{'bg-calm':stateName=='testing'}\" href=\"#/testing\">Testing</a></div></div></reader-header><reader-body><div class=\"height-full bg-white border-grey-3x border-left-1 border-right-1\" [ngStyle]=\"isSwaping?{'overflow-x':'hidden'}:null\"><div class=\"pos-rel text-left height-full\" [ngStyle]=\"{'max-width':screenWidthModel+'px'}\"><error-well [error]=\"AppData.error\"></error-well><div class=\"pad-md\" *ngIf=\"stateName=='overview'\" [@absoluteSwap]=\"panelAnim\" (@absoluteSwap.start)=\"isSwaping=1\" (@absoluteSwap.done)=\"isSwaping=0\"><overview-component></overview-component><div class=\"text-center\"><br/><a class=\"text-xs\" href=\"#top\" pageScroll=\"pageScroll\">top</a></div></div><div class=\"pad-md\" *ngIf=\"stateName=='builder'\" [@absoluteSwap]=\"panelAnim\" (@absoluteSwap.start)=\"isSwaping=1\" (@absoluteSwap.done)=\"isSwaping=0\"><rjon-builder></rjon-builder><div class=\"text-center\"><br/><a class=\"text-xs\" href=\"#top\" pageScroll=\"pageScroll\">top</a></div></div><div class=\"pad-md\" *ngIf=\"stateName=='reviewing'\" [@absoluteSwap]=\"panelAnim\" (@absoluteSwap.start)=\"isSwaping=1\" (@absoluteSwap.done)=\"isSwaping=0\"><div class=\"pad-bottom flex-valign-center\"><div class=\"flex-1\"><h2 class=\"margin-0\">Route Learning &amp; Testing Tools</h2></div><div class=\"flex-wrap child-pad-xs child-margin-xxs\"><div class=\"border border-grey-4x text-xs radius-5 text-danger bg-danger\" *ngIf=\"AppData.invalidJson\">invalid Json</div><div class=\"border border-grey-4x text-xs radius-5 text-warning bg-warning\" *ngIf=\"AppData.invalidRjon\">invalid Rjon</div><div class=\"border border-grey-4x text-xs radius-5 text-success bg-success\" *ngIf=\"!AppData.invalidJson &amp;&amp; !AppData.invalidRjon\">valid Rjon</div><div class=\"border border-grey-4x text-xs radius-5 bg-info bg-grey-4x\">routes {{ AppData.rjon ? AppData.rjon.routes.length : 0 }}</div><div class=\"border border-grey-4x text-xs radius-5 bg-info bg-grey-4x\">hosts {{ AppData.rjon ? AppData.rjon.hosts.length : 0 }}</div></div></div><rjon-viewer></rjon-viewer><div class=\"text-center\"><br/><a class=\"text-xs\" href=\"#top\" pageScroll=\"pageScroll\">top</a></div></div><div class=\"pad-md\" *ngIf=\"stateName=='http'\" [@absoluteSwap]=\"panelAnim\" (@absoluteSwap.start)=\"isSwaping=1\" (@absoluteSwap.done)=\"isSwaping=0\"><test-route [hosts]=\"AppData.rjon.hosts\" spaceSaving=\"0\" [headers]=\"AppData.rjon.headers\" (onSave)=\"AppData.rjon.routes.push($event)\"></test-route></div><div class=\"pad-md\" *ngIf=\"stateName=='testing'\" [@absoluteSwap]=\"panelAnim\" (@absoluteSwap.start)=\"isSwaping=1\" (@absoluteSwap.done)=\"isSwaping=0\"><div class=\"flex child-pad-xs child-margin-xxs\"><h2 class=\"flex-1 margin-top-0\">Testing</h2><div class=\"border border-grey-6x bg-grey-6x text-center\"><div>tests</div>{{ rjonTester?.actualTestRoutes.length }}</div><div class=\"border border-grey-6x bg-grey-6x text-center\"><div>routes</div>{{ rjonTester?.actualRoutes.length }}</div></div><rjon-tester [(ref)]=\"rjonTester\"></rjon-tester><div class=\"text-center\"><br/><a class=\"text-xs\" href=\"#top\" pageScroll=\"pageScroll\">top</a></div></div></div></div></reader-body></reader-header-body>";
//# sourceMappingURL=rjon-app-stage.pug.js.map