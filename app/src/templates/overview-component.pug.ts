export const string = "<error-well [error]=\"error\"></error-well><h2 class=\"margin-v-0\">Route Javascript Object Notation</h2><p class=\"margin-0 pad-h text-grey-2x\">A superb conduit to building, testing, and reviewing API end-points</p><h3 class=\"margin-bottom-0\">Current Route JSON</h3><div class=\"flex-valign-center child-pad-xs child-margin-xxs\"><div class=\"flex-1 pad-h\" [ngClass]=\"AppData.invalidJson?'text-danger':(AppData.invalidRjon?'text-warning':'text-success')\">Have an existing rjon? Paste it below&nbsp;</div><div class=\"border border-grey-4x text-xs radius-5 text-danger bg-danger\" *ngIf=\"AppData.invalidJson\">invalid Json</div><div class=\"border border-grey-4x text-xs radius-5 text-warning bg-warning\" *ngIf=\"AppData.invalidRjon\">invalid Rjon</div><div class=\"border border-grey-4x text-xs radius-5 text-success bg-success\" *ngIf=\"!AppData.invalidJson &amp;&amp; !AppData.invalidRjon\">valid Rjon</div></div><form (onFormAlter)=\"AppData.setRjonString(AppData.rjonString)\"><textarea class=\"width-full height-300 radius-5 border-grey-3x\" placeholder=\"{&quot;routes&quot;:[...], &quot;hosts&quot;: [{&quot;hostname&quot;:&quot;localhost&quot;,&quot;port&quot;: 8080}]}\" [(ngModel)]=\"AppData.rjonString\" (change)=\"setSaveRjonStringAs(AppData.rjonString, AppData.rjon.name)\" name=\"AppData.rjonString\"></textarea><div class=\"text-center text-sm text-success\" *ngIf=\"AppData.lastSaveAt\" [@500]=\"'fadeInUp'\">Last Saved @&nbsp;<span [shakeOn]=\"AppData.lastSaveAt\" shakeType=\"shake-little\">{{ AppData.lastSaveAt | date:'mediumTime' }}</span></div></form><div class=\"pad-xs\"><div class=\"flex child-margin-xxs\"><div class=\"flex-1\"><label>save as name</label><input class=\"width-full\" [(ngModel)]=\"AppData.rjon.name\" (onEnterKey)=\"setSaveRjonStringAs(AppData.rjonString, AppData.rjon.name)\"/></div><div><label>&nbsp;</label><input class=\"width-full\" (click)=\"setSaveRjonStringAs(AppData.rjonString, AppData.rjon.name)\" value=\"save as\" type=\"button\"/></div><div><label>load memory</label><select class=\"width-full\" (change)=\"loadByOfflineName(loadOfflineName)\" [(ngModel)]=\"loadOfflineName\"><option></option><option *ngFor=\"let item of (AppData.rjonSaves|keys)\" [value]=\"item\" [selected]=\"loadOfflineName==item\">{{item}}</option></select></div><div><label>&nbsp;</label><input class=\"width-full\" (click)=\"dedup()\" value=\"dedup\" type=\"button\"/></div><div><label>&nbsp;</label><input class=\"width-full\" (click)=\"viewRjonMerge=!viewRjonMerge\" value=\"merge rjons\" type=\"button\" [ngClass]=\"{'bg-energized':viewRjonMerge}\"/></div></div></div><div class=\"pad\" *ngIf=\"viewRjonMerge\" [@500]=\"'fadeInUp'\"><h4>RJON Merge</h4><p>Merge rjon defition into existing definition</p><textarea class=\"width-full height-300 radius-5 border-grey-3x\" [(ngModel)]=\"mergeRjonString\" placeholder=\"paste rjon here\"></textarea><div class=\"flex\"><a class=\"hover-bg-energized flex1 block pad-xs bg-info border border-info text-center\" (click)=\"compareRjon(mergeRjonString)\">compare rjon</a><a class=\"hover-bg-energized flex1 block pad-xs bg-calm border border-calm text-center\" (click)=\"mergeRjon(mergeRjonString)\">merge rjon</a></div><error-well [error]=\"mergeError\"></error-well><div *ngIf=\"viewRjonMergeResults\" [@500]=\"'fadeInUp'\"><div class=\"flex-valign-center flex-wrap child-margin-h-xs child-pad-xxs\"><div class=\"flex-1\"><h4>RJON Comparison Results</h4></div><div class=\"radius-5 bg-info text-xs\">merge routes {{ rjonMerge.routes.length }}</div><div class=\"radius-5 bg-info text-xs\">add routes {{compareResults.add.routes.length}}</div><div class=\"radius-5 bg-info text-xs\">drop routes {{compareResults.drop.routes.length}}</div><div class=\"radius-5 bg-info text-xs\">merge hosts {{rjonMerge.hosts.length}}</div><div class=\"radius-5 bg-info text-xs\">add hosts {{compareResults.add.hosts.length}}</div><div class=\"radius-5 bg-info text-xs\">drop hosts {{compareResults.drop.hosts.length}}</div></div><div>Add Hosts</div><absolute-overflow-y><pre class=\"code-sample\">{{ compareResults.add.hosts | json }}</pre></absolute-overflow-y><div>Drop Hosts</div><absolute-overflow-y><pre class=\"code-sample\">{{ compareResults.drop.hosts | json }}</pre></absolute-overflow-y><div>Add Routes</div><absolute-overflow-y><pre class=\"code-sample\">{{ compareResults.add.routes | json }}</pre></absolute-overflow-y><div>Drop Routes</div><absolute-overflow-y><pre class=\"code-sample\">{{ compareResults.drop.routes | json }}</pre></absolute-overflow-y></div></div><h3>RJON Map</h3><pre class=\"code-sample\" ngNonBindable=\"ngNonBindable\">&#123;"+
"\n  \"routes\": ["+
"\n    &#123;"+
"\n      \"path\": \"\","+
"\n      \"method\": \"GET\","+
"\n      \"returnType: \"\",<span class=\"text-grey-2x\">//expected type of response</span>"+
"\n      \"description\": \"\","+
"\n      \"notes\": [\"\"],"+
"\n      \"status\": [\"\"],<span class=\"text-grey-2x\">//keyword state descriptors often matching a status icon</span>"+
"\n      \"variables\":&#123;"+
"\n        \"query\":&#123; \"name\":\"type\" &#125;,<span class=\"text-grey-2x\">//url variable details</span>"+
"\n        \"post\":&#123; \"name\":\"type\" &#125;,<span class=\"text-grey-2x\">//post variable details</span>"+
"\n        \"params\":&#123; \"name\":\"type\" &#125;<span class=\"text-grey-2x\">//path variable details</span>"+
"\n      &#125;,"+
"\n      \"sample\": ["+
"\n        &#123;"+
"\n          \"path\": \"\",<span class=\"text-grey-2x\">//sample path substitution</span>"+
"\n          \"query\": &#123;&#125;,<span class=\"text-grey-2x\">//url variables</span>"+
"\n          \"params\": &#123;&#125;,<span class=\"text-grey-2x\">//path variables</span>"+
"\n          \"request\": &#123;&#125;,<span class=\"text-grey-2x\">//request body sample</span>"+
"\n          \"post\": &#123;&#125;,<span class=\"text-grey-2x\">//form post variables</span>"+
"\n          \"test\": &#123;<span class=\"text-grey-2x\">//object or boolean</span>"+
"\n            \"timeout\": 2000,"+
"\n            \"statusCode\": 200,"+
"\n            \"body\": [],"+
"\n            \"only\": false,<span class=\"text-grey-2x\">//skip others bulk tests</span>"+
"\n            \"skip\": false,<span class=\"text-grey-2x\">//skip during bulk tests</span>"+
"\n            \"title\": \"\"<span class=\"text-grey-2x\">//extra details</span>"+
"\n          &#125;"+
"\n        &#125;"+
"\n      ]"+
"\n    &#125;"+
"\n  ],"+
"\n  \"hosts\": ["+
"\n    &#123;"+
"\n      \"hostname\": \"localhost\","+
"\n      \"port\": 8080,"+
"\n      \"description\": \"\","+
"\n      \"notes\": [\"\"]"+
"\n    &#125;"+
"\n  ]"+
"\n&#125;</pre>"