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
    var MyAppNavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MyAppNavbarComponent = (function () {
                function MyAppNavbarComponent(_router) {
                    this._router = _router;
                }
                MyAppNavbarComponent.prototype.isRouteActive = function (route) {
                    var instruction = this._router.generate([route]);
                    return this._router.isRouteActive(instruction);
                };
                MyAppNavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app-navbar',
                        template: "\n\t\t<div class=\"my-app-navbar\">\n\t\t\t<nav class=\"navbar navbar-default\">\n\t\t\t  <div class=\"container-fluid\">\n\t\t\t    <div class=\"navbar-header\">\n\t\t\t      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#nav-details\">\n\t\t\t        <span class=\"sr-only\">Toggle navigation</span>\n\t\t\t        <span class=\"icon-bar\"></span>\n\t\t\t        <span class=\"icon-bar\"></span>\n\t\t\t        <span class=\"icon-bar\"></span>\n\t\t\t      </button>\n\t\t\t      <a class=\"navbar-brand\" [routerLink]=\"['Home']\">Vikas Ediga</a>\n\t\t\t    </div>\n\n\t\t\t    <div class=\"collapse navbar-collapse\" id=\"nav-details\">\n\t\t\t      <ul class=\"nav navbar-nav\">\n\t\t\t        <li [class.active]=\"isRouteActive('Users')\">\n\t\t\t        \t<a [routerLink]=\"['Users']\">Users</a>\n\t\t\t       \t</li>\n\t\t\t        <li [class.active]=\"isRouteActive('Posts')\">\n\t\t\t        \t<a [routerLink]=\"['Posts']\">Posts</a>\n\t\t\t        </li>\n\t\t\t      </ul>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</nav>\n\t\t</div>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], MyAppNavbarComponent);
                return MyAppNavbarComponent;
            }());
            exports_1("MyAppNavbarComponent", MyAppNavbarComponent);
        }
    }
});
//# sourceMappingURL=my-app-navbar.component.js.map