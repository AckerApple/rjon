import { EventEmitter } from '@angular/core';
export declare class RjonHeaderEditor {
    data: any;
    dataChange: EventEmitter<{}>;
    add(): void;
    drop(key: any): void;
    getKeys(): string[];
}
