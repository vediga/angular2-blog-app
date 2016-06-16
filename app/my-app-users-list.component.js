System.register(["angular2/core", "./my-app-users.service"], function(exports_1, context_1) {
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
    var core_1, my_app_users_service_1;
    var UsersListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_app_users_service_1_1) {
                my_app_users_service_1 = my_app_users_service_1_1;
            }],
        execute: function() {
            UsersListComponent = (function () {
                function UsersListComponent(_service) {
                    this._service = _service;
                    this.loading = true;
                }
                UsersListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getUsers().subscribe(function (us) {
                        _this.users = us;
                        _this.loading = false;
                    });
                };
                UsersListComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        template: "\n\t\t <div class=\"users\">\n\t\t\t <h1>Users</h1>\n\t\t\t <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n\t\t\t <table class=\"table table-bordered\">\n\t\t\t    <thead>\n\t\t\t      <tr>\n\t\t\t        <th>Name</th>\n\t\t\t        <th>Email</th>\n\t\t\t        <th>Edit</th>\n\t\t\t        <th>Delete</th>\n\t\t\t      </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t      <tr *ngFor=\"#user of users\">\n\t\t\t        <td>{{user.name}}</td>\n\t\t\t        <td>{{user.email}}</td>\n\t\t\t        <td><span class=\"glyphicon glyphicon-edit\"></span></td>\n\t\t\t        <td><span class=\"glyphicon glyphicon-remove\"></span></td>\n\t\t\t      </tr>\n\t\t\t    </tbody>\n\t\t\t  </table>\n\t\t  <div>\n\t",
                        providers: [my_app_users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [my_app_users_service_1.UsersService])
                ], UsersListComponent);
                return UsersListComponent;
            }());
            exports_1("UsersListComponent", UsersListComponent);
        }
    }
});
//# sourceMappingURL=my-app-users-list.component.js.map