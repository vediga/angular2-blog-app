System.register(["angular2/core", "./my-app-spinner.component", "./my-app-users.service", "./my-app-post.service"], function(exports_1, context_1) {
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
    var core_1, my_app_spinner_component_1, my_app_users_service_1, my_app_post_service_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_app_spinner_component_1_1) {
                my_app_spinner_component_1 = my_app_spinner_component_1_1;
            },
            function (my_app_users_service_1_1) {
                my_app_users_service_1 = my_app_users_service_1_1;
            },
            function (my_app_post_service_1_1) {
                my_app_post_service_1 = my_app_post_service_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_service, _userService) {
                    this._service = _service;
                    this._userService = _userService;
                    this.posts = [];
                    this.loading = true;
                    this.users = [];
                    this.comments = [];
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getPosts()
                        .subscribe(function (posts) {
                        _this.posts = posts;
                        _this.loading = false;
                    });
                    this._userService.getUsers()
                        .subscribe(function (users) {
                        _this.users = users;
                    });
                };
                PostsComponent.prototype.showDetail = function (post) {
                    var _this = this;
                    this.selectedPost = post;
                    this.loadingComments = true;
                    this._service.getComments(post)
                        .subscribe(function (comments) {
                        _this.comments = comments;
                        _this.loadingComments = false;
                    });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        template: "\n\t\t<div class=\"posts\">\n\t\t\t<h1>Posts</h1>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<spinner [visible]=\"loading\"></spinner>\n\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t<option>select a user ...</option>\n\t\t\t\t\t\t<option *ngFor=\"#user of users\">\n\t\t\t\t\t\t\t{{user.name}}\n\t\t\t\t\t\t</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li *ngFor=\"#post of posts\" class=\"list-group-item\" (click)=\"showDetail(post)\">\n\t\t\t\t\t\t\t{{post.title}}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" *ngIf=\"selectedPost\">\n\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t    \t<h3 class=\"panel-title\">{{selectedPost.title}}</h3>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t  \t<div class=\"panel-body\">\n\t\t\t\t\t\t    {{selectedPost.body}}\n\t\t\t\t\t\t    <hr/>\n\t\t\t\t\t\t    <spinner [visible]=\"loadingComments\"></spinner>\n\t\t\t\t\t\t    <div *ngIf=\"!loadingComments\">\n\t\t\t\t\t\t    \t<div *ngFor=\"#comment of comments\">\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t  <div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t    <img class=\"media-object\" [src]=\"'http://www.lorempixel.com/80/80/people?random=' + comment.id\">\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t    <h4 class=\"media-heading\">{{comment.name}}</h4>\n\t\t\t\t\t\t\t\t\t    {{comment.body}}\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
                        styles: ["\n\t\t.posts\tli\t{\tcursor:\tdefault;\t}\n\t\t.posts\tli:hover\t{\tbackground:\t#ecf0f1;\t}\t\n\t\t.list-group-item.active,\t\n\t\t.list-group-item.active:hover,\t\n\t\t.list-group-item.active:focus\t{\t\n\t\t\t background-color:\t#ecf0f1;\n\t\t\t border-color:\t#ecf0f1;\t\n\t\t\t color:\t#2c3e50;\n\t\t}\n\n\t\timg {\n\t\t\tborder-radius: 100%;\n\t\t}\n\t"],
                        providers: [my_app_post_service_1.PostService, my_app_users_service_1.UsersService],
                        directives: [my_app_spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [my_app_post_service_1.PostService, my_app_users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=my-app-posts.component.js.map