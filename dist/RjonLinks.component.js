"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rjon_links_pug_1 = require("./templates/rjon-links.pug");
var rjonHelper = require("./rjonHelper");
var RjonLinks = /** @class */ (function () {
    function RjonLinks() {
        this.rjon = { name: null };
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
    /*getDownloadHtml(){
      let string = '<!DOCTYPE html><html lang="en"><body>'+this.markdownCss + this.innerHtmlModel+'</body></html>'
      return string.replace(/replaceref/g,'href')
    }
  
    fetchMarkdownCss(){
      this.AckApi.request({url:'markdown.css'})
      .then(markdownCss=>this.markdownCss='<style>'+markdownCss+'</style>')
    }*/
    RjonLinks.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'rjon-links',
                    template: rjon_links_pug_1.string
                },] },
    ];
    /** @nocollapse */
    RjonLinks.ctorParameters = function () { return []; };
    RjonLinks.propDecorators = {
        'rjon': [{ type: core_1.Input },],
    };
    return RjonLinks;
}());
exports.RjonLinks = RjonLinks;
//# sourceMappingURL=RjonLinks.component.js.map