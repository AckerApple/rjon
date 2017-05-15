"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statIconMap_1 = require("./statIconMap");
var pipes_class_1 = require("ack-angular/pipes.class");
var statIconMap_2 = require("./statIconMap");
exports.statIconMap = statIconMap_2.statIconMap;
function serverUrlByRoute(host, route, sample) {
    var routePath = route.path;
    if (sample) {
        if (sample.path) {
            routePath = sample.path;
        }
        if (sample.params) {
            var params = sample.params;
            for (var sampleParamKey in params) {
                var rx = new RegExp(':' + sampleParamKey, 'gi');
                routePath = routePath.replace(rx, params[sampleParamKey]);
            }
        }
        if (sample.query) {
            var query = sample.query;
            routePath += '?';
            for (var queryKey in query) {
                routePath += queryKey + '=' + query[queryKey] + '&';
            }
            //remove last &
            routePath = routePath.substring(0, routePath.length - 1);
        }
    }
    var port = host.port || 80;
    var address = 'http://' + host.hostname + ':' + port;
    var sep = routePath.substring(0, 1) == '/' ? '' : '/';
    return address + sep + routePath;
}
exports.serverUrlByRoute = serverUrlByRoute;
function defToArray(sample) {
    var samples = sample && sample.constructor == Function ? sample() : (sample || []);
    return samples.constructor == Array ? samples : [samples];
}
exports.defToArray = defToArray;
function rjonSampleDefToArray(sample) {
    return defToArray(sample);
}
exports.rjonSampleDefToArray = rjonSampleDefToArray;
function rjonToMarkdown(rjon) {
    rjon = rjon || {};
    rjon.hosts = rjon.hosts || [];
    rjon.routes = rjon.routes || [];
    var largeSamples = [];
    var output = '### Table of Hosts\n' +
        '| HOSTNAME | PORT |\n' +
        '| --- | --- |\n';
    for (var x = 0; x < rjon.hosts.length; ++x) {
        var host = rjon.hosts[x];
        output += "| " + host.hostname + " | " + host.port + " |\n";
    }
    output += '\n';
    output += '### Table of Routes\n' +
        '| METHOD | ROUTE | RETURNS | STAT |\n' +
        '| --- | --- | --- | --- |\n';
    var route;
    for (var x = 0; x < rjon.routes.length; ++x) {
        route = rjon.routes[x];
        var link = pipes_class_1.pipes.markdownAnchor(route.method + ' ' + route.path);
        output += "| " + route.method + " | [" + route.path + "](#" + link + ") | " + (route.returnType || '') + " | ";
        if (route.status) {
            if (route.status.forEach) {
                route.status.forEach(function (status) {
                    return output += statIconMap_1.statIconMap[status].icon ? statIconMap_1.statIconMap[status].icon : status;
                });
            }
            else {
                output += statIconMap_1.statIconMap[route.status].icon ? statIconMap_1.statIconMap[route.status].icon : route.status;
            }
        }
        output += '|\n';
    }
    output += '\n\n';
    output += '## Route Definitions\n\n';
    var _loop_1 = function (xRoute) {
        route = rjon.routes[xRoute];
        output += "### " + (route.method + ' ' + route.path) + "\n";
        if (route.status) {
            if (route.status.forEach) {
                route.status.forEach(function (status) {
                    return output += '- ' + statIconMap_1.statIconMap[status].icon ? statIconMap_1.statIconMap[status].icon : status + '\n';
                });
            }
            else {
                output += '- ' + statIconMap_1.statIconMap[route.status].icon ? statIconMap_1.statIconMap[route.status].icon : route.status + '\n';
            }
        }
        //if(route.method)output += `- method: ${ route.method }\n`
        if (route.returnType)
            output += "- return-type: " + route.returnType + "\n";
        if (route.details)
            output += "- " + route.details + "\n";
        var sampler = rjonSampleDefToArray(route.sample);
        rjon.hosts.forEach(function (host) {
            sampler.forEach(function (sample) {
                var action = serverUrlByRoute(host, route, sample);
                output += "- [" + host.hostname + "](" + action + ")\n";
            });
        });
        sampler.forEach(function (sample) {
            if (sample.test) {
                var tests = defToArray(sample.test);
                tests.forEach(function (test, i) {
                    var testLabel = 'Sample Test ' + i + ': ' + route.method + ': ' + route.path;
                    var responseTestName = pipes_class_1.pipes.markdownAnchor(testLabel);
                    output += "- Sample: [test](#" + responseTestName + ")\n";
                    var string = "- Expects statusCode: " + test.statusCode + "\n";
                    string += '- Request Body:\n```javascript\n' + JSON.stringify(test.body, null, 2) + '\n```\n';
                    largeSamples.push({
                        label: testLabel,
                        route: route,
                        string: string
                    });
                });
            }
            if (sample.response) {
                var responseLabel = 'Sample Response: ' + route.method + ': ' + route.path;
                var responseSampleName = pipes_class_1.pipes.markdownAnchor(responseLabel);
                output += "- Sample: [response](#" + responseSampleName + ")\n";
                largeSamples.push({
                    label: responseLabel,
                    route: route,
                    string: '```javascript\n' + JSON.stringify(sample.response, null, 2) + '\n```\n',
                });
            }
            if (sample.request) {
                var requestLabel = 'Sample Request: ' + route.method + ': ' + route.path;
                var requestSampleName = pipes_class_1.pipes.markdownAnchor(requestLabel);
                output += "- Sample: [request](#" + requestSampleName + ")\n";
                largeSamples.push({
                    label: requestLabel,
                    route: route,
                    string: '```javascript\n' + JSON.stringify(sample.request, null, 2) + '\n```\n',
                });
            }
        });
        output += '\n';
    };
    for (var xRoute = 0; xRoute < rjon.routes.length; ++xRoute) {
        _loop_1(xRoute);
    }
    if (largeSamples.length) {
        output += '## Request Response Samples\n\n';
        for (var xSample = 0; xSample < largeSamples.length; ++xSample) {
            var sample = largeSamples[xSample];
            output += "### " + sample.label + "\n";
            output += sample.string;
            output += '```\n\n';
        }
    }
    output += "\n\n";
    output += "[back to top](#table-of-contents)";
    if (largeSamples.length) {
        output = "- [Request Response Samples](#request-response-samples)\n\n" + output;
    }
    else {
        output = "\n\n" + output;
    }
    output = '### Table of Contents\n' +
        '- [Table of Hosts](#table-of-hosts)\n' +
        '- [Table of Routes](#table-of-routes)\n' +
        '- [Route Definitions](#route-definitions)\n' + output;
    return output;
}
exports.rjonToMarkdown = rjonToMarkdown;
//# sourceMappingURL=rjonHelper.js.map