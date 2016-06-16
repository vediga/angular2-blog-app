System.register(['angular2/core', 'angular2/router', './my-app-navbar.component', './my-app-home.component', './my-app-users.component', './my-app-user.component', './my-app-posts.component', './my-app-not-found.component'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, my_app_navbar_component_1, my_app_home_component_1, my_app_users_component_1, my_app_user_component_1, my_app_posts_component_1, my_app_not_found_component_1;
    var MyAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (my_app_navbar_component_1_1) {
                my_app_navbar_component_1 = my_app_navbar_component_1_1;
            },
            function (my_app_home_component_1_1) {
                my_app_home_component_1 = my_app_home_component_1_1;
            },
            function (my_app_users_component_1_1) {
                my_app_users_component_1 = my_app_users_component_1_1;
            },
            function (my_app_user_component_1_1) {
                my_app_user_component_1 = my_app_user_component_1_1;
            },
            function (my_app_posts_component_1_1) {
                my_app_posts_component_1 = my_app_posts_component_1_1;
            },
            function (my_app_not_found_component_1_1) {
                my_app_not_found_component_1 = my_app_not_found_component_1_1;
            }],
        execute: function() {
            MyAppComponent = (function () {
                function MyAppComponent() {
                }
                MyAppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: my_app_home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/users', name: 'Users', component: my_app_users_component_1.UsersComponent },
                        { path: '/users/:id', name: 'ExistingUser', component: my_app_user_component_1.UserComponent },
                        { path: '/users/new', name: 'NewUser', component: my_app_user_component_1.UserComponent },
                        { path: '/posts', name: 'Posts', component: my_app_posts_component_1.PostsComponent },
                        { path: '/not-found', name: 'NotFound', component: my_app_not_found_component_1.NotFoundComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"my-app\">\n            <my-app-navbar></my-app-navbar>\n            <div class=\"container\">\n                <router-outlet></router-outlet>\n            </div>\n\t    </div>\n    ",
                        directives: [router_2.ROUTER_DIRECTIVES, my_app_navbar_component_1.MyAppNavbarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyAppComponent);
                return MyAppComponent;
            }());
            exports_1("MyAppComponent", MyAppComponent);
        }
    }
});
//# sourceMappingURL=my-app.component.js.map