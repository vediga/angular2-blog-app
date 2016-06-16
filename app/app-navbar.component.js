System.register(["angular2/core", 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var AppNavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppNavbarComponent = (function () {
                function AppNavbarComponent() {
                }
                AppNavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'app-navbar',
                        template: "\n\t\t<div class=\"app-navbar\">\n\t \t\t<nav class=\"navbar navbar-inverse\">\n              <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                  <a class=\"navbar-brand\" [routerLink]=\"['Home']\">ng2</a>\n                </div>\n                <ul class=\"nav navbar-nav\">\n                  <li><a [routerLink]=\"['Home']\">Home</a></li>\n                  <li><a [routerLink]=\"['Components']\">Components</a></li>\n                </ul>\n              </div>\n            </nav>\n\t\t</div>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppNavbarComponent);
                return AppNavbarComponent;
            }());
            exports_1("AppNavbarComponent", AppNavbarComponent);
        }
    }
});
//# sourceMappingURL=app-navbar.component.js.map