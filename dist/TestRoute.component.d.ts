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
    headers: {
        name: string;
        value: string;
    }[];
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
    applyProtocol(): void;
    getDefaultBodyModel(): string;
    setBodyObject(ob: any): void;
    trySend(): void;
    getProtocol(): string;
    send(): void;
}
