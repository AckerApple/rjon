import { EventEmitter } from '@angular/core';
import { AckApi } from "ack-angular";
import * as rjonHelper from "./rjonHelper";
/** interface to test a single route */
export declare class TestRoute {
    AckApi: AckApi;
    route: any;
    headers: any;
    hosts: any;
    spaceSaving: boolean;
    hostModel: any;
    hostModelChange: EventEmitter<any>;
    onSave: EventEmitter<{}>;
    lastSave: number;
    headersModel: {
        'Content-Type': string;
    };
    protocolModel: any;
    contentTypeModel: string;
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
    constructor(AckApi: AckApi);
    ngOnInit(): void;
    setContentType(type: any): any;
    getDefaultHostModel(): any;
    setHostByIndex(index: any): void;
    applyHostHeaders(host: any): void;
    applyProtocol(): void;
    getDefaultBodyModel(): string;
    setBodyObject(ob: any): void;
    trySend(): void;
    getProtocol(): string;
    send(): void;
    save(): void;
}
