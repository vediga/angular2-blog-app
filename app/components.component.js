System.register(["angular2/core", 'angular2/router', './authors.component', './favorite.component', './like.component', './components-navbar.component', './tweets.component', './voter.component'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, authors_component_1, favorite_component_1, like_component_1, components_navbar_component_1, tweets_component_1, voter_component_1;
    var ComponentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (components_navbar_component_1_1) {
                components_navbar_component_1 = components_navbar_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            }],
        execute: function() {
            ComponentsComponent = (function () {
                function ComponentsComponent() {
                }
                ComponentsComponent = __decorate([
                    router_2.RouteConfig([
                        { path: '/authors', name: 'Authors', component: authors_component_1.AuthorsComponent },
                        { path: '/favorite', name: 'Favorite', component: favorite_component_1.FavoriteComponent },
                        { path: '/like', name: 'Like', component: like_component_1.LikeComponent },
                        { path: '/tweets', name: 'Tweets', component: tweets_component_1.TweetsComponent, useAsDefault: true },
                        { path: '/voters', name: 'Voters', component: voter_component_1.VoterComponent }
                    ]),
                    core_1.Component({
                        selector: 'components',
                        template: "\n\t\t<div class=\"components\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-2\">\n                \t<components-navbar></components-navbar>\n                </div>\n             \t<div class=\"col-md-10\">\n\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, tweets_component_1.TweetsComponent, voter_component_1.VoterComponent, components_navbar_component_1.ComponentsNavbarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ComponentsComponent);
                return ComponentsComponent;
            }());
            exports_1("ComponentsComponent", ComponentsComponent);
        }
    }
});
//# sourceMappingURL=components.component.js.map