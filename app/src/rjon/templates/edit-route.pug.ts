export const string = "<h3>Edit Route : {{ route.path }}</h3><form (onFormChanged)=\"onChange.emit(route)\"><div class=\"flex-wrap child-margin-xxs child-margin-bottom\"><div class=\"flex-1\"><label>Path</label><input class=\"width-full\" [(ngModel)]=\"route.path\" name=\"route.path\"/></div><div class=\"flex-1\"><label>Select Method</label><select class=\"width-full\" [(ngModel)]=\"route.method\" name=\"route.method\"><option *ngFor=\"let item of ['GET','POST','PUT','PATCH','DELETE']\" [value]=\"item\">{{ item }}</option></select></div><div class=\"flex-1\"><label>Description</label><input class=\"width-full\" [(ngModel)]=\"route.description\" name=\"route.description\"/></div><div class=\"width-full\"><label>Notes</label><rjon-notes-editor [data]=\"route.notes\"></rjon-notes-editor></div><div class=\"width-full\"><label>Groups</label><div class=\"flex-wrap child-margin-xxs\"><ack-array [(array)]=\"route.groupNames\" [(ref)]=\"GroupNames\"></ack-array><div class=\"flex\" *ngFor=\"let item of route.groupNames|array;let i=index;trackBy:0|indexTrack\"><input type=\"text\" [(ngModel)]=\"route.groupNames[i]\" name=\"groupName{{i}}\" placeholder=\"Testing group name\"/><a class=\"pad-h-xs bg-assertive border-assertive text-white\" (click)=\"GroupNames.splice(i)\" [title]=\"route.groupNames[i]\">-</a></div><div *ngIf=\"testGroups.length\"><select class=\"width-full\" (change)=\"GroupNames.push($event.target.value);$event.target.selectedIndex=0\"><option>-- Add Group by Select --</option><option *ngFor=\"let item of testGroups\">{{item}}</option></select></div><a class=\"pad-h-xs bg-positive border-positive text-white\" (click)=\"GroupNames.push('')\">+ Add Group</a></div></div></div><div class=\"margin-xs\" *ngIf=\"(route.sample|array).length\" [@500]=\"'fadeInUp'\"><h4>Samples</h4><div class=\"child-margin-xxs\" *ngFor=\"let sample of route.sample|array; let sampleIndex=index\" [@500]=\"'fadeInUp'\"><div><label>Sample Path</label><input class=\"width-full\" [(ngModel)]=\"sample.path\" [name]=\"'sample.path'+sampleIndex\" placeholder=\"{{ route.path }}\"/></div><div #sampleRequest=\"var\" [var]=\"{request:sample.request?(sample.request|json):'', testBody:sample.test?(sample.test.body|json):''}\">Sample Request Body<textarea class=\"width-full height-200\" [ngModel]=\"sampleRequest.var.request\" (change)=\"setSampleRequest(sample,sampleRequest.var.request)\" [name]=\"'sample.request'+sampleIndex\"></textarea></div><div><div class=\"flex\"><h4 class=\"flex-1\">Sample Test</h4><div><a class=\"pad-h text-success bg-success\" *ngIf=\"sample.test==null\" (click)=\"sample.test={}\">add test</a></div></div><div class=\"test-sm\" *ngIf=\"sample.test\" [@500]=\"'fadeInUp'\"><div class=\"flex-wrap child-pad-xxs\"><div class=\"flex-1\"><label>Title</label><input class=\"width-full\" [(ngModel)]=\"sample.test.title\" [name]=\"'sample.test.title'+sampleIndex\" placeholder=\"test label\"/></div><div class=\"flex-1\"><label>Timeout</label><input class=\"width-full\" type=\"number\" [(ngModel)]=\"sample.test.timeout\" [name]=\"'sample.test.timeout'+sampleIndex\"/></div><div class=\"flex-1\"><label>statusCode</label><input class=\"width-full\" type=\"number\" [(ngModel)]=\"sample.test.statusCode\" [name]=\"'sample.test.statusCode'+sampleIndex\"/></div><div class=\"flex-1\"><label>&nbsp;</label><div><input type=\"checkbox\" [(ngModel)]=\"sample.test.only\" [name]=\"'sample.test.only'+sampleIndex\" [attr.id]=\"'sample.test.only'+sampleIndex\"/><label [attr.for]=\"'sample.test.only'+sampleIndex\">only</label></div></div><div class=\"flex-1\"><label>&nbsp;</label><div><input type=\"checkbox\" [(ngModel)]=\"sample.test.skip\" [name]=\"'sample.test.skip'+sampleIndex\" [attr.id]=\"'sample.test.skip'+sampleIndex\"/><label [attr.for]=\"'sample.test.skip'+sampleIndex\">skip</label></div></div></div><div class=\"pad-xxs\">Test Body<textarea class=\"width-full height-200\" [ngModel]=\"sampleRequest.var.testBody\" (change)=\"setTestBody(sample.test, sampleRequest.var.testBody)\" [name]=\"'sample.test'+sampleIndex\"></textarea></div><div class=\"pad-xxs text-right\"><a class=\"pad-h text-danger bg-danger\" (click)=\"sample.test=null\">remove test</a></div></div></div></div></div><div class=\"flex child-pad-xxs child-margin-xxs text-center text-xs text-positive\"><a class=\"flex-1 border-positive border\" (click)=\"addSample()\">add sample</a></div><br/><div class=\"margin-xxs\"><div class=\"flex-valign-bottom\"><label class=\"flex-1\">Status</label><div class=\"flex child-pad-h-xs border border-grey-4x radius-5\"><a (click)=\"statusView='cells'\" [ngClass]=\"{'bg-energized':!statusView||statusView=='cells'}\">cells</a><a class=\"border-left border-grey-4x\" (click)=\"statusView='table'\" [ngClass]=\"{'bg-energized':statusView=='table'}\">table</a></div></div><div class=\"flex-wrap child-margin-xxs text-center\" *ngIf=\"!statusView||statusView=='cells'\" [@500]=\"'fadeInUp'\"><div class=\"flex-1\" *ngFor=\"let key of statIconMap|keys\"><div class=\"text-center text-3x\"><div class=\"hover-bg-energized flex-valign-center inline-block border radius-half\" [ngClass]=\"(route.status|array).indexOf(key)&gt;=0?'bg-success border-success':'opacity-60 bg-grey-5x border-grey-5x'\" (click)=\"toggleRouteStatus(key)\"><a class=\"width-40 height-40 flex-valign-center flex-center\" [attr.title]=\"statIconMap[key].details\"><span>{{ statIconMap[key].icon }}</span></a></div></div></div></div><icon-table *ngIf=\"statusView=='table'\" [@500]=\"'fadeInUp'\" (onClick)=\"toggleRouteStatus($event)\" [activeIcons]=\"(route.status|array)\"></icon-table></div></form>"