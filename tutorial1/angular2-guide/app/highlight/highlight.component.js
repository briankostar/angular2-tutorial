System.register(['angular2/core', './highlight.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, highlight_directive_1;
    var HighlightComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            HighlightComponent = (function () {
                function HighlightComponent() {
                }
                HighlightComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>My First Attribute Directive</h1>\n\t\t\t<span myHighlight>Highlight me!</span>\n\t\t\t<div myHighlight>second highlight</div>\n\n\t\t\t<input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n\t\t\t  <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n\t\t\t  <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n\t\t\t  <p [myHighlight]=\"color\" [defaultColor]=\"'blue'\">Highlight me!</p>\n",
                        directives: [highlight_directive_1.HighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HighlightComponent);
                return HighlightComponent;
            })();
            exports_1("HighlightComponent", HighlightComponent);
        }
    }
});
//# sourceMappingURL=highlight.component.js.map