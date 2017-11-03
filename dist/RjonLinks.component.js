"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rjon_links_pug_1 = require("./templates/rjon-links.pug");
var rjonHelper = require("./rjonHelper");
var RjonLinks = /** @class */ (function () {
    function RjonLinks() {
    }
    RjonLinks.prototype.getEmailString = function () {
        return 'mailto:?subject=rjon ' + this.rjon.name + '&body=' + encodeURIComponent(this.getDownloadString());
    };
    RjonLinks.prototype.getMarkdownString = function () {
        return rjonHelper.rjonToMarkdown(this.rjon);
    };
    RjonLinks.prototype.getDownloadString = function () {
        return JSON.stringify(this.rjon, null, 2); //this.AppData.rjonString
    };
    return RjonLinks;
}());
exports.RjonLinks = RjonLinks;
//# sourceMappingURL=RjonLinks.component.js.map