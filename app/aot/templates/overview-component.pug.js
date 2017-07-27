"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<error-well [error]=\"error\"></error-well><h2 class=\"margin-v-0\">Route Javascript Object Notation</h2><p class=\"margin-0 pad-h text-grey-2x\">A superb conduit to building, testing, and reviewing API end-points</p><h3>RJON Map</h3><p class=\"margin-v-0\">Below is a map of standarized RJON</p><pre class=\"code-sample\" ngNonBindable=\"ngNonBindable\">&#123;" +
    "\n  \"routes\": [" +
    "\n    &#123;" +
    "\n      \"path\": \"\"," +
    "\n      \"method\": \"GET\"," +
    "\n      \"returnType\": \"\",<span class=\"text-grey-2x\">//expected type of response</span>" +
    "\n      \"description\": \"\"," +
    "\n      \"notes\": [\"\"]," +
    "\n      \"groupNames\": [\"\"]<span class=\"text-grey-2x\">//mostly used to create groups of testing</span>" +
    "\n      \"status\": [\"star\"],<span class=\"text-grey-2x\">//keyword descriptors. Often matches status icon. star=⭐</span>" +
    "\n      \"variables\":&#123;" +
    "\n        \"query\":&#123; \"name\":\"type\" &#125;,<span class=\"text-grey-2x\">//url variable details</span>" +
    "\n        \"post\":&#123; \"name\":\"type\" &#125;,<span class=\"text-grey-2x\">//post variable details</span>" +
    "\n        \"params\":&#123; \"name\":\"type\" &#125;<span class=\"text-grey-2x\">//path variable details</span>" +
    "\n      &#125;," +
    "\n      \"sample\": [" +
    "\n        &#123;" +
    "\n          \"path\": \"\",<span class=\"text-grey-2x\">//sample path substitution</span>" +
    "\n          \"query\": &#123;&#125;,<span class=\"text-grey-2x\">//url variables</span>" +
    "\n          \"params\": &#123;&#125;,<span class=\"text-grey-2x\">//path variables</span>" +
    "\n          \"request\": &#123;&#125;,<span class=\"text-grey-2x\">//request body sample</span>" +
    "\n          \"headers\": &#123;\"name\": \"value\"&#125;" +
    "\n          \"post\": &#123;&#125;,<span class=\"text-grey-2x\">//form post variables</span>" +
    "\n          \"test\": &#123;<span class=\"text-grey-2x\">//object or boolean</span>" +
    "\n            \"timeout\": 2000," +
    "\n            \"statusCode\": 200," +
    "\n            \"body\": []," +
    "\n            \"only\": false,<span class=\"text-grey-2x\">//skip others bulk tests</span>" +
    "\n            \"skip\": false,<span class=\"text-grey-2x\">//skip during bulk tests</span>" +
    "\n            \"title\": \"\"<span class=\"text-grey-2x\">//extra details</span>" +
    "\n          &#125;" +
    "\n        &#125;" +
    "\n      ]" +
    "\n    &#125;" +
    "\n  ]," +
    "\n  \"hosts\": [" +
    "\n    &#123;" +
    "\n      \"protocol\": \"https\"," +
    "\n      \"hostname\": \"localhost\"," +
    "\n      \"port\": 8080," +
    "\n      \"description\": \"\"," +
    "\n      \"notes\": [\"\"]," +
    "\n      \"headers\": &#123;\"name\": \"value\"&#125;,<span class=\"text-grey-2x\">//headers meant for all requests to this host</span>" +
    "\n      \"routes\": &#123;&#125;<span class=\"text-grey-2x\">//routes limited to only this host</span>" +
    "\n    &#125;" +
    "\n  ]," +
    "\n  \"headers\": &#123;\"name\": \"value\"&#125;,<span class=\"text-grey-2x\">//global headers meant for all requests</span>" +
    "\n  \"name\":\"\"<span class=\"text-grey-2x\">//save-reference</span>" +
    "\n&#125;" +
    "\n</pre><br/><h3>Route Status Icons</h3><p class=\"text-grey-2x\">The icons below help explain what route status icons definitions mean</p><icon-table></icon-table>";
//# sourceMappingURL=overview-component.pug.js.map