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
    var core_1, core_2;
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            LikeComponent = (function () {
                function LikeComponent() {
                    this.change = new core_2.EventEmitter();
                }
                LikeComponent.prototype.onChange = function () {
                    var isLiked = !this.isLiked;
                    this.change.emit({ isLiked: isLiked });
                };
                LikeComponent = __decorate([
                    core_1.Component({
                        selector: 'like',
                        template: "<div>\n\t\t\t<i\n\t\t\t\tclass=\"glyphicon glyphicon-heart\"\n\t\t\t\t[class.liked]=\"isLiked\"\n\t\t\t\t(click)=\"onChange()\"\n\t\t\t\t></i>\n\t\t\t<span class=\"likesCount\">{{likesCount}}</span>\n\t\t</div>\n\t",
                        inputs: ['likesCount', 'isLiked'],
                        outputs: ['change:onStateChange'],
                        styles: ["\n\t\t.glyphicon-heart {\n\t\t\tcolor: #ccc;\n\t\t\tfont-size: 25px;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.liked {\n\t\t\tcolor: deeppink;\n\t\t}\n\t\t.likesCount {\n\t\t\tfont-size: 25px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LikeComponent);
                return LikeComponent;
            }());
            exports_1("LikeComponent", LikeComponent);
        }
    }
});
//# sourceMappingURL=like.component.js.map