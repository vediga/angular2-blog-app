System.register(["angular2/core", 'angular2/router', './nav-bar.component'], function(exports_1, context_1) {
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
    var core_1, router_1, nav_bar_component_1;
    var ComponentsNavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (nav_bar_component_1_1) {
                nav_bar_component_1 = nav_bar_component_1_1;
            }],
        execute: function() {
            ComponentsNavbarComponent = (function () {
                function ComponentsNavbarComponent(_router) {
                    this._router = _router;
                    this.navItems = [
                        { title: 'Tweets', id: 'Tweets' },
                        { title: 'Favorite', id: 'Favorite' },
                        { title: 'Like', id: 'Like' }
                    ];
                }
                ComponentsNavbarComponent.prototype.onNavChange = function (data) {
                    this._router.navigate([("" + data.id)]);
                };
                ComponentsNavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'components-navbar',
                        template: "\n\t\t<div class=\"components-navbar\">\n\t\t\t<nav-bar [navItems]=\"navItems\" (change)=\"onNavChange($event)\"></nav-bar>\n\t\t</div>\n\t",
                        directives: [nav_bar_component_1.NavBar]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ComponentsNavbarComponent);
                return ComponentsNavbarComponent;
            }());
            exports_1("ComponentsNavbarComponent", ComponentsNavbarComponent);
        }
    }
});
//# sourceMappingURL=components-navbar.component.js.map