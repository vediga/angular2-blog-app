System.register(["angular2/core", "angular2/common", "angular2/router", "./my-app-spinner.component", "./my-app-email.validator", "./my-app-users.service", "./my-app-user.model"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, my_app_spinner_component_1, my_app_email_validator_1, my_app_users_service_1, my_app_user_model_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (my_app_spinner_component_1_1) {
                my_app_spinner_component_1 = my_app_spinner_component_1_1;
            },
            function (my_app_email_validator_1_1) {
                my_app_email_validator_1 = my_app_email_validator_1_1;
            },
            function (my_app_users_service_1_1) {
                my_app_users_service_1 = my_app_users_service_1_1;
            },
            function (my_app_user_model_1_1) {
                my_app_user_model_1 = my_app_user_model_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(fb, ev, _router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                    this.submitted = false;
                    this.loading = false;
                    this.user = new my_app_user_model_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3)])],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, ev.isValidEmail])],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                UserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.id = this._routeParams.get('id');
                    if (this.id) {
                        this.title = 'Edit User';
                        this.isNewUser = false;
                    }
                    else {
                        this.title = 'New User';
                        this.isNewUser = true;
                        return;
                    }
                    this.loading = true;
                    this._service.getUser(this.id).
                        subscribe(function (data) {
                        _this.user = data;
                        _this.loading = false;
                    }, function (response) {
                        if (response.status === 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                UserComponent.prototype.routerCanDeactivate = function (next, prev) {
                    if (this.form.dirty && !this.submitted) {
                        return confirm('Are you sure?');
                    }
                    return true;
                };
                UserComponent.prototype._createNewUser = function () {
                    var _this = this;
                    this._service.postUser(this.user).subscribe(function (data) {
                        // TODO: Mark the form as pristine
                        _this.loading = false;
                        _this._router.navigate(['Users']);
                    });
                };
                UserComponent.prototype._updateUser = function () {
                    var _this = this;
                    this._service.putUser(this.user).subscribe(function (data) {
                        // TODO: Mark the form as pristine
                        _this.loading = false;
                        _this._router.navigate(['Users']);
                    });
                };
                UserComponent.prototype.saveUser = function () {
                    this.submitted = true;
                    this.loading = true;
                    if (this.isNewUser) {
                        this._createNewUser();
                    }
                    else {
                        this._updateUser();
                    }
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'new-user',
                        template: "\n        <div>\n            <h1>{{title}}</h1>\n            <div class=\"row\">\n              <div class=\"col-md-6 well\">\n                <spinner [visible]=\"loading\"></spinner>\n                <form *ngIf=\"!loading\" [ngFormModel]=\"form\" (ngSubmit)=\"saveUser()\">\n                  <fieldset>\n                      <legend>User</legend>\n                      <div class=\"form-group\">\n                        <label for=\"name\">Name:</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            id=\"name\"\n                            ngControl=\"name\"\n                            [(ngModel)]=\"user.name\"\n                            #name=\"ngForm\">\n                        <div *ngIf=\"name.touched && name.errors\">\n                            <div *ngIf=\"name.errors.required\" class=\"alert alert-danger\">Name is required.</div>\n                            <div *ngIf=\"name.errors.minlength\" class=\"alert alert-danger\">\n                                Name must be atleast {{name.errors.minlength.requiredLength}} characters long.\n                            </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"email\">Email address:</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            id=\"email\"\n                            ngControl=\"email\"\n                            [(ngModel)]=\"user.email\"\n                            #email=\"ngForm\">\n                        <div *ngIf=\"email.touched && !email.valid\" class=\"alert alert-danger\">\n                            Please enter a valid email.\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"phone\">Phone:</label>\n                        <input type=\"text\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"user.phone\">\n                      </div>\n                  </fieldset>\n                  <fieldset ngControlGroup=\"address\">\n                      <legend>Address</legend>\n                      <div class=\"form-group\">\n                        <label for=\"street\">Street:</label>\n                        <input type=\"text\" class=\"form-control\" id=\"street\" [(ngModel)]=\"user.address.street\">\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"apartment\">Apartment number:</label>\n                        <input type=\"text\" class=\"form-control\" id=\"apartment\" [(ngModel)]=\"user.address.suite\">\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"city\">City:</label>\n                        <input type=\"text\" class=\"form-control\" id=\"city\" [(ngModel)]=\"user.address.city\">\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"zip\">ZipCode:</label>\n                        <input type=\"text\" class=\"form-control\" id=\"zip\" [(ngModel)]=\"user.address.zipcode\">\n                      </div>\n                  </fieldset>\n                  <button\n                      type=\"submit\"\n                      class=\"btn btn-primary\"\n                      [disabled]=\"!form.valid\">\n                      Save\n                  </button>\n                </form>\n              </div>\n            </div>\n        </div>\n    ",
                        providers: [my_app_email_validator_1.EmailValidator, my_app_users_service_1.UsersService],
                        directives: [my_app_spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, my_app_email_validator_1.EmailValidator, router_1.Router, router_1.RouteParams, my_app_users_service_1.UsersService])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=my-app-user.component.js.map