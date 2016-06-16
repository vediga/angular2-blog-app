System.register(['angular2/core', './nav-bar.component', './zippy.component', './poller.component', './authors.component', './favorite.component', './like.component', './voter.component', './tweet.component', './todo.component', './tweet.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, nav_bar_component_1, zippy_component_1, poller_component_1, authors_component_1, favorite_component_1, like_component_1, voter_component_1, tweet_component_1, todo_component_1, tweet_service_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nav_bar_component_1_1) {
                nav_bar_component_1 = nav_bar_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (poller_component_1_1) {
                poller_component_1 = poller_component_1_1;
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
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(ts) {
                    this.navItems = [
                        { title: 'Todo App', id: 'app_0' },
                        { title: 'Components', id: 'app_1' },
                        { title: 'Some other App', id: 'app_2' }
                    ];
                    this.activeAppId = 'app_0';
                    this.likeObject = { numLikes: 100, isLiked: true };
                    this.pollObj = {
                        question: "Ask a question for a public poll?",
                        options: [{ text: "option1", count: 1 }, { text: "option2", count: 20 }, { text: "option3", count: 30 }, { text: "option4", count: 12 }]
                    };
                    this.voterObj = {
                        totalVotes: 100,
                        state: -1
                    };
                    this.tweets = [];
                    this.tweets = ts.getTweets();
                }
                AppComponent.prototype.onVote = function (data) {
                    this.voterObj.state += data.state;
                    this.voterObj.totalVotes += data.state;
                };
                AppComponent.prototype.onNavChange = function (data) {
                    this.activeAppId = data.id;
                };
                AppComponent.prototype.onLikeStateChange = function (data) {
                    if (this.likeObject.isLiked) {
                        if (!data.isLiked)
                            this.likeObject.numLikes--;
                    }
                    else {
                        if (data.isLiked)
                            this.likeObject.numLikes++;
                    }
                    this.likeObject.isLiked = data.isLiked;
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: todo_component_1.TodoComponent },
                        { path: '/components/zippy', name: 'Home', component: zippy_component_1.Zippy }
                    ]),
                    core_1.Component({
                        selector: 'app',
                        directives: [todo_component_1.TodoComponent, nav_bar_component_1.NavBar, zippy_component_1.Zippy, poller_component_1.Poller, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent, tweet_component_1.TweetComponent],
                        providers: [tweet_service_1.TweetService],
                        template: "\n    \t<div class=\"container well\">\n    \t\t<div class=\"row\">\n                <div class=\"col-md-3\">\n                    <nav-bar [navItems]=\"navItems\" (change)=\"onNavChange($event)\">Nav Bar</nav-bar>\n                </div>\n                <div class=\"col-md-9\">\n        \t\t\t<div *ngIf=\"activeAppId === 'app_0'\">\n                        \n                        <todo></todo>\n                        \n                    </div>\n\n                    <div *ngIf=\"activeAppId === 'app_1'\">\n                        <h1 class=\"text-center\">Components</h1>\n                        <div *ngIf=\"false\">\n                            <h2>Zippy</h2>\n                            <zippy>\n                                <div class=\"header\">Notifications <span class=\"badge badge-primary\">2</span></div>\n                                <div class=\"content\">\n                                    <div class=\"alert alert-danger\">Danger</div>\n                                    <div class=\"alert alert-info\">Info</div>\n                                </div>\n                            </zippy>\n                            <br/>\n                            <poller [pollObj]=\"pollObj\"></poller>\n                            <br/>\n                            <authors></authors>\n                            <br/>\n                            <favorite></favorite>\n                            <br/>\n                            <like\n                                [likesCount]=\"likeObject.numLikes\"\n                                [isLiked]=\"likeObject.isLiked\"\n                                (onStateChange)=\"onLikeStateChange($event)\">\n                            </like>\n                        </div>\n                        <br/>\n                        <voter [voterObj]=\"voterObj\" (vote)=\"onVote($event)\"></voter>\n                        <br/>\n                        <tweet *ngFor=\"#tweet of tweets\" [tweet]=\"tweet\">\n                        </tweet>\n                    </div>\n\n                    <div *ngIf=\"activeAppId === 'app_2'\">\n                        <h1 class=\"text-center\">Under construction</h1>\n                    </div>\n                </div>\n\t\t    </div>\n\t    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app_old.js.map