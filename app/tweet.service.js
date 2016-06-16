System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var TweetService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [{
                            name: 'Windward',
                            id: '@windwardstudios',
                            content: 'Looking for a better company reporting or docgen app?',
                            imgUrl: 'http://www.lorempixel.com/100/100?1',
                            likes: {
                                numLikes: 5,
                                isLiked: true
                            }
                        },
                        {
                            name: 'AngularJS News',
                            id: '@angularjs_news',
                            content: 'Want to build a new angular js app?',
                            imgUrl: 'http://www.lorempixel.com/100/100?2',
                            likes: {
                                numLikes: 15,
                                isLiked: false
                            }
                        },
                        {
                            name: 'Southwest Airlines',
                            id: '@southwest_airlines',
                            content: 'Southwest - the best airlines !!',
                            imgUrl: 'http://www.lorempixel.com/100/100?3',
                            likes: {
                                numLikes: 25,
                                isLiked: true
                            }
                        },
                        {
                            name: 'AngularJS 2 News',
                            id: '@angularjs_news',
                            content: 'Want to build a new angular js app?',
                            imgUrl: 'http://www.lorempixel.com/100/100?4',
                            likes: {
                                numLikes: 150,
                                isLiked: false
                            }
                        }];
                };
                TweetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TweetService);
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map