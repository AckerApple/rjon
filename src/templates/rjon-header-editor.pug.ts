export const string = "<div class=\"flex child-pad-xxs\" *ngFor=\"let item of getKeys(); let i=index; trackBy:0|indexTrack\" [@500]=\"'fadeInUp'\"><input class=\"flex-1\" [value]=\"item\" (change)=\"data[$event.target.value]=data[item];drop(item)\" placeholder=\"header name\"/><span>=</span><input class=\"flex-1\" [(ngModel)]=\"data[item]\" placeholder=\"header value\"/><a class=\"bg-assertive border border-assertive pad-h\" (click)=\"drop(item)\" style=\"color:white;\">remove</a></div><div class=\"text-right\"><a class=\"text-sm text-blue underline\" (click)=\"add()\">add header</a></div>"