export declare const string = "<div *ngFor=\"let note of data|array; let i=index; trackBy:0|indexTrack\" [@500]=\"'fadeInUp'\"><input class=\"width-full\" [(ngModel)]=\"data[i]\" [name]=\"'data'+i\"/></div><a class=\"block border-positive border bg-positive text-white\" (click)=\"add()\">add note</a>";