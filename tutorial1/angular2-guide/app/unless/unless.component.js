System.register(['angular2/core', './unless.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, unless_directive_1;
    var UnlessComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            }],
        execute: function() {
            UnlessComponent = (function () {
                function UnlessComponent() {
                    this.condition = false;
                }
                UnlessComponent = __decorate([
                    core_1.Component({
                        selector: 'my-unless',
                        template: "\n  <p *myUnless=\"condition\">\n  condition is false and myUnless is true.\n\t</p>\n\n\t<p *myUnless=\"!condition\">\n\t  condition is true and myUnless is false.\n\t</p>\n",
                        directives: [unless_directive_1.UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UnlessComponent);
                return UnlessComponent;
            })();
            exports_1("UnlessComponent", UnlessComponent);
        }
    }
});
//# sourceMappingURL=unless.component.js.map