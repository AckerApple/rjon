import 'rxjs/add/operator/toPromise';
export interface routeConfig {
    port: number | string;
    host: string;
    headers: {};
}
export declare class Tester {
    log(options: any): void;
    /**
      @options{
        port - what port to conduct test on
        method - limit tests to only matching methods
        host - server address
      }
    */
    testRoutes(routes: any, options: routeConfig): Promise<{
        passing: any;
        failing: any;
    }>;
    processRanCases(passing: any, failing: any, errs: any): {
        passing: any;
        failing: any;
    };
    logCaseError(err: any): void;
    runTestCase(test: any): any;
    promiseTestCase(test: any, processTest: any): Promise<any>;
    runTestCases(tests: any, processTest: any): Promise<void>;
    requestSampleRoute(sample: any, route: any, options: any): void;
    /**
      @options{
        port - what port to conduct test on
        method - limit tests to only matching methods
        host - server address
      }
    */
    getTestBySampleRoute(sample: any, route: any, options: any): () => any;
    testRouteSampleResponse(route: any, sample: any): (res: any) => Promise<void>;
    testCases(cases: any, res: any): Promise<any[]>;
    callbackTimeout(promise: any, timeout: any): (callback: any) => void;
    mapSample(sample: any, route: any, options: any): {
        test: () => any;
        name: string;
        sample: any;
    };
    static getRouteSamplePath(route: any, sample?: {
        path: string;
        params: any;
    }): any;
    static getRouteActualTests(routes: any): any[];
    static getRouteTests(routes: any): any[];
    static getTestGroups(routes: any): any[];
    static getRoutesWithTests(routes: any): any[];
    static getRoutesWithActualTests(routes: any): any[];
}
