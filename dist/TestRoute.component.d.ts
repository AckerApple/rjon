import { EventEmitter } from '@angular/core';
import { AckApi } from "ack-angular";
import * as rjonHelper from "./rjonHelper";
export declare class TestRoute {
    AckApi: AckApi;
    route: {};
    hosts: any;
    spaceSaving: boolean;
    hostModel: any;
    hostModelChange: EventEmitter<{}>;
    rjonHelper: typeof rjonHelper;
    pathModel: any;
    methodModel: any;
    loadSample: any;
    bodyModel: any;
    response: any;
    tryingSend: any;
    sending: number;
    error: any;
    responseView: any;
    headers: {
        'Content-Type': string;
    };
    constructor(AckApi: AckApi);
    ngOnInit(): void;
    getDefaultHostModel(): any;
    setHostByIndex(index: any): void;
    getDefaultBodyModel(): string;
    setBodyObject(ob: any): void;
    trySend(): void;
    send(): void;
}
