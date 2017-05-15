"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.fxArray = [
    animations_1.trigger('500', [
        animations_1.transition('zoomInUp => void, void => zoomOutUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => zoomInUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('zoomInRight => void, void => zoomOutLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => zoomInRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('zoomInLeft => void, void => zoomOutRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => zoomInLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('zoomInDown => void, void => zoomOutDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => zoomInDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('zoomIn => void, void => zoomOut', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => zoomIn', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state('zoomOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOutDown', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOut', animations_1.style({ "display": "none" })),
        animations_1.transition('slideInUp => void, void => slideOutUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => slideInUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('slideInRight => void, void => slideOutLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => slideInRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('slideInLeft => void, void => slideOutRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => slideInLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('slideInDown => void, void => slideOutDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => slideInDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state('slideOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('slideOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('slideOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('slideOutDown', animations_1.style({ "display": "none" })),
        animations_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => rotateInUpRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => rotateInUpLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => rotateInDownRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => rotateInDownLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('rotateIn => void, void => rotateOut', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => rotateIn', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state('rotateOutUpRight', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOutUpLeft', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOutDownRight', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOutDownLeft', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOut', animations_1.style({ "display": "none" })),
        animations_1.transition('bounceInUp => void, void => bounceOutUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => bounceInUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('bounceInRight => void, void => bounceOutLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => bounceInRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('bounceInLeft => void, void => bounceOutRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => bounceInLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('bounceInDown => void, void => bounceOutDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => bounceInDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('bounceIn => void, void => bounceOut', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => bounceIn', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state('bounceOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOutDown', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOut', animations_1.style({ "display": "none" })),
        animations_1.transition('fadeInUp => void, void => fadeOutUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => fadeInUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('fadeInRight => void, void => fadeOutLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => fadeInRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('fadeInLeft => void, void => fadeOutRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => fadeInLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('fadeInDown => void, void => fadeOutDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => fadeInDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('fadeIn => void, void => fadeOut', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => fadeIn', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state('fadeOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOutDown', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOut', animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger('400', [
        animations_1.transition('zoomInUp => void, void => zoomOutUp', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => zoomInUp', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('zoomInRight => void, void => zoomOutLeft', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => zoomInRight', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('zoomInLeft => void, void => zoomOutRight', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => zoomInLeft', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('zoomInDown => void, void => zoomOutDown', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => zoomInDown', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('zoomIn => void, void => zoomOut', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => zoomIn', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state('zoomOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOutDown', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOut', animations_1.style({ "display": "none" })),
        animations_1.transition('slideInUp => void, void => slideOutUp', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => slideInUp', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('slideInRight => void, void => slideOutLeft', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => slideInRight', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('slideInLeft => void, void => slideOutRight', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => slideInLeft', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('slideInDown => void, void => slideOutDown', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => slideInDown', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state('slideOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('slideOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('slideOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('slideOutDown', animations_1.style({ "display": "none" })),
        animations_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => rotateInUpRight', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => rotateInUpLeft', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => rotateInDownRight', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => rotateInDownLeft', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('rotateIn => void, void => rotateOut', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => rotateIn', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state('rotateOutUpRight', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOutUpLeft', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOutDownRight', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOutDownLeft', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOut', animations_1.style({ "display": "none" })),
        animations_1.transition('bounceInUp => void, void => bounceOutUp', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => bounceInUp', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('bounceInRight => void, void => bounceOutLeft', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => bounceInRight', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('bounceInLeft => void, void => bounceOutRight', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => bounceInLeft', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('bounceInDown => void, void => bounceOutDown', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => bounceInDown', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('bounceIn => void, void => bounceOut', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => bounceIn', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state('bounceOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOutDown', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOut', animations_1.style({ "display": "none" })),
        animations_1.transition('fadeInUp => void, void => fadeOutUp', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => fadeInUp', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('fadeInRight => void, void => fadeOutLeft', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => fadeInRight', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('fadeInLeft => void, void => fadeOutRight', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => fadeInLeft', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('fadeInDown => void, void => fadeOutDown', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => fadeInDown', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('fadeIn => void, void => fadeOut', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition('void => fadeIn', [
            animations_1.animate('400ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state('fadeOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOutDown', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOut', animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger('absoluteSwap', [
        animations_1.transition('zoomInUp => void, void => zoomOutUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => zoomInUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('zoomInRight => void, void => zoomOutLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => zoomInRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('zoomInLeft => void, void => zoomOutRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => zoomInLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('zoomInDown => void, void => zoomOutDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => zoomInDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('zoomIn => void, void => zoomOut', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => zoomIn', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state('zoomOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOutDown', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOut', animations_1.style({ "display": "none" })),
        animations_1.transition('slideInUp => void, void => slideOutUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => slideInUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('slideInRight => void, void => slideOutLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => slideInRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('slideInLeft => void, void => slideOutRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => slideInLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('slideInDown => void, void => slideOutDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => slideInDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state('slideOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('slideOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('slideOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('slideOutDown', animations_1.style({ "display": "none" })),
        animations_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => rotateInUpRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => rotateInUpLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => rotateInDownRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => rotateInDownLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('rotateIn => void, void => rotateOut', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => rotateIn', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state('rotateOutUpRight', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOutUpLeft', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOutDownRight', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOutDownLeft', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOut', animations_1.style({ "display": "none" })),
        animations_1.transition('bounceInUp => void, void => bounceOutUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => bounceInUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('bounceInRight => void, void => bounceOutLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => bounceInRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('bounceInLeft => void, void => bounceOutRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => bounceInLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('bounceInDown => void, void => bounceOutDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => bounceInDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('bounceIn => void, void => bounceOut', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => bounceIn', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state('bounceOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOutDown', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOut', animations_1.style({ "display": "none" })),
        animations_1.transition('fadeInUp => void, void => fadeOutUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => fadeInUp', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('fadeInRight => void, void => fadeOutLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => fadeInRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('fadeInLeft => void, void => fadeOutRight', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => fadeInLeft', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('fadeInDown => void, void => fadeOutDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => fadeInDown', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('fadeIn => void, void => fadeOut', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition('void => fadeIn', [
            animations_1.animate('500ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state('fadeOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOutDown', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOut', animations_1.style({ "display": "none" }))
    ])
];
//# sourceMappingURL=prefx.js.map