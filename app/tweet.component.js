System.register(["angular2/core", "./like.component"], function(exports_1, context_1) {
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
    var core_1, like_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent() {
                }
                TweetComponent.prototype.onLikeStateChange = function (data) {
                    var likeObj = this.tweet.likes;
                    if (likeObj.isLiked) {
                        if (!data.isLiked)
                            likeObj.numLikes--;
                    }
                    else {
                        if (data.isLiked)
                            likeObj.numLikes++;
                    }
                    likeObj.isLiked = data.isLiked;
                };
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        directives: [like_component_1.LikeComponent],
                        template: "\n\t\t<div class=\"tweet\">\n\t\t\t<div class=\"media\">\n\t\t\t  <div class=\"media-left\">\n\t\t\t    <a href=\"#\">\n\t\t\t      <img class=\"media-object\" [src]=\"tweet.imgUrl\" alt=\"missing image\">\n\t\t\t    </a>\n\t\t\t  </div>\n\t\t\t  <div class=\"media-body\">\n\t\t\t    <h3 class=\"media-heading\">\n\t\t\t\t\t{{tweet.name}} <span class=\"tweet-id\">{{tweet.id}}</span>\n\t\t\t    </h3>\n\t\t\t    {{tweet.content}}\n\t\t\t    <like\n\t\t\t    \t[likesCount]=\"tweet.likes.numLikes\"\n                    [isLiked]=\"tweet.likes.isLiked\"\n                    (onStateChange)=\"onLikeStateChange($event)\">\n\t\t\t    </like>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t",
                        inputs: ['tweet'],
                        styles: ["\n\t\t.tweet {\n\t\t\tmargin: 20px 0;\n\t\t\tfont-size: 20px;\n\t\t}\n\t\t.tweet-id {\n\t\t\tcolor: #999;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map