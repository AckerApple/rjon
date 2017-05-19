export declare const string = "<h3>Test : {{ route.path }} - {{spaceSaving}}</h3><div *ngIf=\"!(spaceSaving|boolean) || !tryingSend\" [@500]=\"'fadeInUp'\"><div class=\"flex-wrap child-pad-xs\"><div class=\"flex-1\"><label>Select Method</label><select class=\"width-full\" [(ngModel)]=\"methodModel\"><option *ngFor=\"let item of ['GET','POST','PUT','PATCH','DELETE']\" [value]=\"item\">{{ item }}</option></select></div><div class=\"flex-1\"><label>Select Host</label><select class=\"width-full\" (change)=\"setHostByIndex($event.target.value)\"><option></option><option *ngFor=\"let host of hosts; let i=index\" [value]=\"i\" [selected]=\"host.hostname==(hostModel&amp;&amp;hostModel.hostname)\">{{ host.protocol||'http' }}://{{ host.hostname }}:{{ host.port || 80 }}</option></select></div><div class=\"flex-1\"><label>Content-Type</label><select class=\"width-full\" [(ngModel)]=\"headers['Content-Type']\"><option *ngFor=\"let item of ['application/json','text/plain']\" [value]=\"item\">{{ item }}</option></select></div></div><div class=\"pad-xs\"><label>Path</label><input class=\"width-full\" [(ngModel)]=\"pathModel\" placeholder=\"Path\" (onEnterKey)=\"trySend()\"/></div><div class=\"pad-xs\"><div class=\"pad-xs border bg-info text-info border-info\" *ngFor=\"let sample of rjonHelper.defToArray(route.sample); let i = index\"><div class=\"hover-text-shadow-grey-blur hover-text-white cursor-pointer\" (click)=\"loadSample=loadSample==i?null:i\"><strong>Load Sample #{{i}}</strong></div><div class=\"pad-xs child-margin-top-lg\" *ngIf=\"loadSample==i\" [@500]=\"'fadeInUp'\"><div *ngIf=\"sample.request\"><div class=\"text-sm\">Request Body</div><absolute-overflow-x><pre class=\"code-sample max-height-200\">{{ sample.request | json}}</pre></absolute-overflow-x><a class=\"pad-xs block text-center bg-calm border-calm border text-white\" (click)=\"setBodyObject(sample.request)\">Use Request Body</a></div><div *ngFor=\"let test of rjonHelper.defToArray(sample.test); let testIndex=index\"><div *ngIf=\"test.request\"><div class=\"text-sm\">Test #{{testIndex}} Request Body</div><absolute-overflow-x><pre class=\"code-sample max-height-200\">{{ test.request | json}}</pre></absolute-overflow-x><a class=\"pad-xs block text-center bg-calm border-calm border text-white\" (click)=\"setBodyObject(test.request)\">Use Request Body</a></div></div></div></div></div><div class=\"pad-xs\" *ngIf=\"!loadSample\" [@500]=\"'fadeInUp'\"><label>Request Body</label><textarea class=\"width-full height-200\" [(ngModel)]=\"bodyModel\" placeholder=\"Data Transmission Body\"></textarea></div></div><div class=\"flex-wrap text-center child-pad-xs child-margin-left-1 child-first-margin-left-0\"><a class=\"flex-1 text-info bg-info\" *ngIf=\"tryingSend\" (click)=\"tryingSend=null\" [@500]=\"'fadeInUp'\"><div class=\"hover-text-shadow-grey-blur hover-text-white\">Configure</div></a><a class=\"flex-1\" (click)=\"trySend()\" [ngClass]=\"tryingSend ? 'text-info bg-info' : 'text-success bg-success'\"><div class=\"hover-text-shadow-grey-blur hover-text-white\">Request</div></a><a class=\"flex-1\" *ngIf=\"tryingSend &amp;&amp; response\" (click)=\"responseView='map'\" [@500]=\"'fadeInUp'\" [ngClass]=\"responseView=='map'?'bg-energized':'text-info bg-info'\"><div class=\"hover-text-shadow-grey-blur hover-text-white\">Map</div></a><a class=\"flex-1\" *ngIf=\"tryingSend &amp;&amp; response\" (click)=\"responseView='json'\" [@500]=\"'fadeInUp'\" [ngClass]=\"responseView=='json'?'bg-energized':'text-info bg-info'\"><div class=\"hover-text-shadow-grey-blur hover-text-white\">Json</div></a><a class=\"flex-1\" *ngIf=\"tryingSend &amp;&amp; response\" (click)=\"responseView='body'\" [@500]=\"'fadeInUp'\" [ngClass]=\"responseView=='body'?'bg-energized':'text-info bg-info'\"><div class=\"hover-text-shadow-grey-blur hover-text-white\">Body</div></a></div><div class=\"pad-xs\" *ngIf=\"tryingSend\" [@500]=\"'fadeInUp'\"><div class=\"pad-xs\" *ngIf=\"sending\" [@500]=\"'fadeInUp'\"><span class=\"fa fa-spinner fa-spin fa-lg\"></span>&nbsp;Loading</div><div class=\"text-danger child-pad-xs\"><li *ngIf=\"!hostModel\">No host was selected</li></div><error-well [error]=\"error\"></error-well><div *ngIf=\"response &amp;&amp; responseView=='map'\" [@500]=\"'fadeInUp'\"><absolute-overflow-x><div [innerHtml]=\"response | dump | safeHtml\"></div></absolute-overflow-x></div><div *ngIf=\"response &amp;&amp; responseView=='json'\" [@500]=\"'fadeInUp'\"><absolute-overflow-x><pre class=\"code-sample max-height-300\">{{ response | json }}</pre></absolute-overflow-x></div><div *ngIf=\"response &amp;&amp; responseView=='body'\" [@500]=\"'fadeInUp'\"><textarea class=\"code-sample height-400 width-full\" wrap=\"off\">{{ response.data ? (response.data|json) : response._body }}</textarea></div></div>";
