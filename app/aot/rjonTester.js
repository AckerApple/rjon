"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/toPromise");
var pipes_class_1 = require("ack-angular/pipes.class");
var ack = require("ack-x/index-browser");
var icons = {
    check: '✓'
};
function AssertionError(message) {
    this.name = this.constructor.name;
    this.message = message;
}
AssertionError.prototype = Object.create(Error.prototype);
var assert = {
    equal: function (a, b, message) {
        if (a == b)
            return;
        throw message ? new AssertionError(message) : new AssertionError(a + ' == ' + b);
    }
};
/*if (process.platform === 'win32') {
  icons.check = '\u221A';
}*/
var Tester = (function () {
    function Tester() {
    }
    //public requestSampleRoute:any
    Tester.prototype.log = function (options) {
        options = options || {};
        switch (options.type) {
            case 'success':
                options.message = '\x1b[32m' + options.message + '\x1b[0m';
                break;
            case 'error':
                options.message = '\x1b[31m' + options.message + '\x1b[0m';
                break;
            case 'info':
                options.message = '\x1b[36m' + options.message + '\x1b[0m';
                break;
        }
        console.log.apply(console, options.message);
    };
    /**
      @options{
        port - what port to conduct test on
        method - limit tests to only matching methods
        host - server address
      }
    */
    Tester.prototype.testRoutes = function (routes, options) {
        var _this = this;
        var passing = [];
        var failing = [];
        var errs = [];
        var successCount = 0;
        var processTestError = function (test, err) {
            var msg = errs.length + ') ' + test.name;
            errs.push({ msg: msg, error: err });
            _this.log({ type: 'error', message: msg });
            return err;
        };
        var processTest = function (test, err) {
            if (err) {
                failing.push(test);
                return processTestError(test, err);
            }
            ++successCount;
            /*let msg = test.name
            if(test.time>75){
              msg += ' ('+test.time+'ms)'
            }else if(test.time>37){
              msg += ' ('+test.time+'ms)'
            }*/
            _this.log({ type: 'success', message: test.name, test: test });
            passing.push(test);
        };
        var tests = [];
        var onlyArray = [];
        var promises = routes.map(function (route) {
            var routeTests = route.sample.map(function (sample) { return _this.mapSample(sample, route, options); });
            tests.push.apply(tests, routeTests);
        });
        for (var x = tests.length - 1; x >= 0; --x) {
            var testMeta = tests[x];
            if (!testMeta) {
                tests.splice(x, 1);
                continue;
            }
            if (testMeta.sample.test.only) {
                onlyArray.unshift(testMeta);
            }
        }
        var runs = onlyArray.length ? onlyArray : tests;
        return this.runTestCases(runs, processTest)
            .then(function () { return _this.processRanCases(passing, failing, errs); });
        //.catch(e=>console.error(e))
    };
    Tester.prototype.processRanCases = function (passing, failing, errs) {
        var _this = this;
        this.log({ type: 'success', message: passing.length + ' passing' });
        if (errs.length) {
            this.log({ type: 'error', message: errs.length + ' failing' });
            errs.forEach(function (err) { return _this.logCaseError(err); });
        }
        return { passing: passing, failing: failing };
    };
    Tester.prototype.logCaseError = function (err) {
        this.log({ type: 'error', message: err.msg, error: err });
        var response = err.error || err;
        var data = response.data || response; //try parsed json ELSE error is response
        var resErr = data.error || data; //try response body for error ELSE error is body
        if (resErr.message) {
            this.log({ type: 'error', message: resErr.message });
            if (resErr.stack && !resErr.isTimeoutError) {
                this.log({ type: 'error', message: resErr.stack });
            }
        }
    };
    Tester.prototype.runTestCase = function (test) {
        var startTime = Date.now();
        return test.test()
            .then(function (x) { return (test.time = Date.now() - startTime) && x; });
    };
    Tester.prototype.promiseTestCase = function (test, processTest) {
        if (test.sample.test.skip) {
            this.log({ type: 'info', message: 'skipped ' + test.name, test: { time: 0 } });
            return;
        }
        return Promise.resolve(this.runTestCase(test))
            .catch(function (err) { return err; })
            .then(function (err) { return processTest(test, err); });
    };
    Tester.prototype.runTestCases = function (tests, processTest) {
        var _this = this;
        var promise = Promise.resolve();
        tests.forEach(function (test) {
            promise = promise.then(function () { return _this.promiseTestCase(test, processTest); });
        });
        return promise;
    };
    //HOLD ONTO
    /*ackRequestSampleRoute(sample, route, options){
      options = options || {}
      options.host = options.host || 'localhost'
  
      const simplePath = this.getRouteSamplePath(route, sample)
  
      const req = ack.req()
  
      if(sample.post){
        req.postVar(sample.post)
      }
  
      if(route.method){
        req.method(route.method)
      }
  
      if(sample.request){
        req.json(result)
      }
  
      const urlPath = 'http://'+options.host+':'+options.port + simplePath
  
      //send request
      return req.send(urlPath,{spread:false})
      .then(this.testRouteSampleResponse(route,sample))
    }*/
    Tester.prototype.requestSampleRoute = function (sample, route, options) {
        throw new Error('Expected requestSampleRoute override');
    };
    /**
      @options{
        port - what port to conduct test on
        method - limit tests to only matching methods
        host - server address
      }
    */
    Tester.prototype.getTestBySampleRoute = function (sample, route, options) {
        var _this = this;
        if (sample.response) {
            //foo request by sample.response
            return function () { return ({
                fooResponse: true,
                statusCode: 200,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(sample.response)
            }); };
        }
        return function () {
            var timeout = sample.test.timeout || 2000;
            var promise = _this.requestSampleRoute(sample, route, options); //ignite
            var callback = _this.callbackTimeout(promise, timeout); //wrap in timeout
            return ack.promise().callback(callback) //will resolve or timeout or error
                .then(_this.testRouteSampleResponse(route, sample));
        };
    };
    Tester.prototype.testRouteSampleResponse = function (route, sample) {
        var simplePath = Tester.getRouteSamplePath(route, sample);
        return function (res) {
            var body = res.body;
            var contentType = '';
            var promises = [];
            //see if json
            for (var key in res.headers) {
                if (key.toLowerCase() == 'content-type') {
                    contentType = res.headers[key];
                    break;
                }
            }
            var method = (route.method || 'GET').toUpperCase();
            var isParseBody = !sample.request;
            if (sample.test.cases) {
                var cases = sample.test.cases.constructor == Array ? sample.test.cases : [sample.test.cases];
                promises.push(this.testCases(cases, res));
            }
            if (isParseBody && contentType.search(/application\/json/i) >= 0) {
                body = JSON.parse(body);
            }
            if (route.returnType) {
                var returnType = route.returnType.toLowerCase();
                switch (returnType) {
                    case 'array':
                        assert.equal(body.constructor, Array, 'returnType mismatch. Expected:Array Received:' + body.constructor);
                        break;
                    case 'string':
                    case 'number':
                    case 'boolean':
                    case 'object':
                        assert.equal(typeof (body), returnType, 'returnType mismatch. Expected:' + returnType + ' Received:' + typeof (body));
                        break;
                    default:
                        var contentTypeMatch = contentType.search(returnType) >= 0;
                        assert.equal(contentTypeMatch, true, 'returnType mismatch. Expected:' + returnType + ' Received:' + contentType);
                }
            }
            var statusCode = sample.test.statusCode || 200;
            var resStatus = res.status || res.statusCode;
            assert.equal(resStatus, statusCode);
            return Promise.all(promises).then(function () { });
        };
    };
    Tester.prototype.testCases = function (cases, res) {
        var promises = [];
        for (var index = 0; index < cases.length; ++index) {
            promises.push(cases[index](res, assert));
        }
        return Promise.all(promises);
    };
    Tester.prototype.callbackTimeout = function (promise, timeout) {
        return function (callback) {
            var killCallback = function (err, x) {
                callback(err, x);
                callback = function () { }; //all future calls will become ignored
            };
            setTimeout(function () {
                var err = new Error('Error: Timeout of ' + timeout + 'ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.');
                err['isTimeoutError'] = true;
                killCallback(err);
            }, timeout);
            Promise.resolve(promise)
                .then(function (x) { return killCallback(null, x); })
                .catch(function (e) { return killCallback(e); });
        };
    };
    Tester.prototype.mapSample = function (sample, route, options) {
        var test = this.getTestBySampleRoute(sample, route, options);
        var simplePath = Tester.getRouteSamplePath(route, sample);
        //const itsName = (route.method||'GET')+':'+options.port+simplePath
        var itsName = (route.method || 'GET') + ':' + simplePath;
        if (!sample.test)
            return;
        if (options.method && route.method != options.method) {
            return;
        }
        return { test: test, name: itsName, sample: sample };
    };
    Tester.getRouteSamplePath = function (route, sample) {
        if (sample === void 0) { sample = { path: null, params: null }; }
        var simplePath = sample.path || route.path;
        if (sample.params) {
            for (var key in sample.params) {
                var regX = new RegExp(':' + key, 'gi');
                simplePath = simplePath.replace(regX, sample.params[key]);
            }
        }
        return simplePath;
    };
    Tester.getRouteActualTests = function (routes) {
        var onlyMode = false;
        var tests = [];
        Tester.getRouteTests(routes).forEach(function (test) {
            if (test.only) {
                onlyMode = true;
                return tests.push(test);
            }
            if (onlyMode || test.skip)
                return;
            tests.push(test);
        });
        return tests;
    };
    Tester.getRouteTests = function (routes) {
        var tests = [];
        routes.forEach(function (route) {
            pipes_class_1.array(route.sample).forEach(function (sample) {
                if (sample.test)
                    tests.push(sample.test);
            });
        });
        return tests;
    };
    Tester.getRoutesWithTests = function (routes) {
        var tests = [];
        routes.forEach(function (route) {
            pipes_class_1.array(route.sample).forEach(function (sample) {
                if (sample.test)
                    tests.push(route);
            });
        });
        return tests;
    };
    Tester.getRoutesWithActualTests = function (routes) {
        var onlyMode = false;
        var tests = [];
        Tester.getRoutesWithTests(routes).forEach(function (route) {
            pipes_class_1.array(route.sample).forEach(function (sample) {
                if (!sample.test)
                    return;
                if (sample.test.only) {
                    onlyMode = true;
                    return tests.push(route);
                }
                if (onlyMode || sample.test.skip)
                    return;
                tests.push(route);
            });
        });
        return tests;
    };
    return Tester;
}());
exports.Tester = Tester;
//# sourceMappingURL=rjonTester.js.map