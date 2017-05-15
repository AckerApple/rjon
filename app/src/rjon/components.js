"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var statIconMap_1 = require("./statIconMap");
var rjonHelper = require("./rjonHelper");
var TestRoute_component_1 = require("./TestRoute.component");
var EditRoute_component_1 = require("./EditRoute.component");
var RjonMarkdown_component_1 = require("./RjonMarkdown.component");
var nodedump = require("nodedump");
var Dump = (function () {
    function Dump() {
    }
    Dump.prototype.transform = function (input, options) {
        if (options === void 0) { options = {}; }
        //return nodedump(input, options)
        return nodedump.dump(input, Object.assign({ hideTypes: ['Function'] }, options));
    };
    return Dump;
}());
Dump.decorators = [
    { type: core_1.Pipe, args: [{ name: 'dump' },] },
];
/** @nocollapse */
Dump.ctorParameters = function () { return []; };
exports.Dump = Dump;
var rjon_links_pug_1 = require("./templates/rjon-links.pug");
var RjonLinks = (function () {
    //public markdownCss = ''
    function RjonLinks() {
        this.rjon = { name: null };
        //this.fetchMarkdownCss()
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
exports.RjonLinks = RjonLinks;
var table_of_hosts_pug_1 = require("./templates/table-of-hosts.pug");
var TableOfHosts = (function () {
    function TableOfHosts() {
    }
    return TableOfHosts;
}());
TableOfHosts.decorators = [
    { type: core_1.Component, args: [{
                selector: 'table-of-hosts',
                template: table_of_hosts_pug_1.string
            },] },
];
/** @nocollapse */
TableOfHosts.ctorParameters = function () { return []; };
TableOfHosts.propDecorators = {
    'hosts': [{ type: core_1.Input },],
};
exports.TableOfHosts = TableOfHosts;
var table_of_routes_pug_1 = require("./templates/table-of-routes.pug");
var TableOfRoutes = (function () {
    function TableOfRoutes() {
        this.links = false;
        this.statIconMap = statIconMap_1.statIconMap;
    }
    return TableOfRoutes;
}());
TableOfRoutes.decorators = [
    { type: core_1.Component, args: [{
                selector: 'table-of-routes',
                template: table_of_routes_pug_1.string
            },] },
];
/** @nocollapse */
TableOfRoutes.ctorParameters = function () { return []; };
TableOfRoutes.propDecorators = {
    'routes': [{ type: core_1.Input },],
    'links': [{ type: core_1.Input },],
};
exports.TableOfRoutes = TableOfRoutes;
var icon_table_pug_1 = require("./templates/icon-table.pug");
var IconTable = (function () {
    function IconTable() {
        this.statIconMap = statIconMap_1.statIconMap;
        this.activeIcons = [];
        this.onClick = new core_1.EventEmitter();
    }
    return IconTable;
}());
IconTable.decorators = [
    { type: core_1.Component, args: [{
                selector: 'icon-table',
                template: icon_table_pug_1.string
            },] },
];
/** @nocollapse */
IconTable.ctorParameters = function () { return []; };
IconTable.propDecorators = {
    'activeIcons': [{ type: core_1.Input },],
    'onClick': [{ type: core_1.Output },],
};
exports.IconTable = IconTable;
exports.declarations = [
    TableOfRoutes,
    IconTable,
    EditRoute_component_1.EditRoute,
    TestRoute_component_1.TestRoute,
    RjonMarkdown_component_1.RjonMarkdown,
    TableOfHosts,
    Dump,
    RjonLinks
];
//# sourceMappingURL=components.js.map