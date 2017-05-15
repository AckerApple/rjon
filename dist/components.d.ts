import { EventEmitter } from '@angular/core';
import { TestRoute } from "./TestRoute.component";
import { EditRoute } from "./EditRoute.component";
import { RjonMarkdown } from "./RjonMarkdown.component";
export declare class Dump {
    transform(input: any, options?: {}): any;
}
export declare class RjonLinks {
    rjon: {
        name: any;
    };
    constructor();
    getEmailString(): string;
    getMarkdownString(): string;
    getDownloadString(): string;
}
export declare class TableOfHosts {
    hosts: any;
}
export declare class TableOfRoutes {
    routes: any;
    links: boolean;
    statIconMap: {
        'baby': {
            icon: string;
            type: string;
            details: string;
        };
        'blue_book': {
            icon: string;
            type: string;
            details: string;
        };
        'boom': {
            icon: string;
            type: string;
            details: string;
        };
        'broken_heart': {
            icon: string;
            type: string;
            details: string;
        };
        'bug': {
            icon: string;
            type: string;
            details: string;
        };
        'busts_in_silhouette': {
            icon: string;
            type: string;
            details: string;
        };
        'closed_lock_with_key': {
            icon: string;
            type: string;
            details: string;
        };
        'confused': {
            icon: string;
            type: string;
            details: string;
        };
        'construction': {
            icon: string;
            type: string;
            details: string;
        };
        'eyeglasses': {
            icon: string;
            type: string;
            details: string;
        };
        'fast_forward': {
            icon: string;
            type: string;
            details: string;
        };
        'file_folder': {
            icon: string;
            type: string;
            details: string;
        };
        'heavy_plus_sign': {
            icon: string;
            type: string;
            details: string;
        };
        'hourglass': {
            icon: string;
            type: string;
            details: string;
        };
        'lock': {
            icon: string;
            type: string;
            details: string;
        };
        'paperclip': {
            icon: string;
            type: string;
            details: string;
        };
        'pencil': {
            icon: string;
            type: string;
            details: string;
        };
        'runner': {
            icon: string;
            type: string;
            details: string;
        };
        'seedling': {
            icon: string;
            type: string;
            details: string;
        };
        'skull': {
            icon: string;
            type: string;
            details: string;
        };
        'soon': {
            icon: string;
            type: string;
            details: string;
        };
        'star': {
            icon: string;
            type: string;
            details: string;
        };
        'thumbsdown': {
            icon: string;
            type: string;
            details: string;
        };
        'thumbup': {
            icon: string;
            type: string;
            details: string;
        };
        'turtle': {
            icon: string;
            type: string;
            details: string;
        };
        'wrench': {
            icon: string;
            type: string;
            details: string;
        };
    };
}
export declare class IconTable {
    statIconMap: {
        'baby': {
            icon: string;
            type: string;
            details: string;
        };
        'blue_book': {
            icon: string;
            type: string;
            details: string;
        };
        'boom': {
            icon: string;
            type: string;
            details: string;
        };
        'broken_heart': {
            icon: string;
            type: string;
            details: string;
        };
        'bug': {
            icon: string;
            type: string;
            details: string;
        };
        'busts_in_silhouette': {
            icon: string;
            type: string;
            details: string;
        };
        'closed_lock_with_key': {
            icon: string;
            type: string;
            details: string;
        };
        'confused': {
            icon: string;
            type: string;
            details: string;
        };
        'construction': {
            icon: string;
            type: string;
            details: string;
        };
        'eyeglasses': {
            icon: string;
            type: string;
            details: string;
        };
        'fast_forward': {
            icon: string;
            type: string;
            details: string;
        };
        'file_folder': {
            icon: string;
            type: string;
            details: string;
        };
        'heavy_plus_sign': {
            icon: string;
            type: string;
            details: string;
        };
        'hourglass': {
            icon: string;
            type: string;
            details: string;
        };
        'lock': {
            icon: string;
            type: string;
            details: string;
        };
        'paperclip': {
            icon: string;
            type: string;
            details: string;
        };
        'pencil': {
            icon: string;
            type: string;
            details: string;
        };
        'runner': {
            icon: string;
            type: string;
            details: string;
        };
        'seedling': {
            icon: string;
            type: string;
            details: string;
        };
        'skull': {
            icon: string;
            type: string;
            details: string;
        };
        'soon': {
            icon: string;
            type: string;
            details: string;
        };
        'star': {
            icon: string;
            type: string;
            details: string;
        };
        'thumbsdown': {
            icon: string;
            type: string;
            details: string;
        };
        'thumbup': {
            icon: string;
            type: string;
            details: string;
        };
        'turtle': {
            icon: string;
            type: string;
            details: string;
        };
        'wrench': {
            icon: string;
            type: string;
            details: string;
        };
    };
    activeIcons: any[];
    onClick: EventEmitter<{}>;
}
export declare const declarations: (typeof TestRoute | typeof EditRoute | typeof RjonMarkdown | typeof Dump | typeof RjonLinks | typeof TableOfHosts | typeof TableOfRoutes | typeof IconTable)[];
