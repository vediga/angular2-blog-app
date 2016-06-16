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
    var Zippy;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Zippy = (function () {
                function Zippy() {
                    this.isExpanded = false;
                }
                Zippy.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                Zippy = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n\t\t<div class=\"zippy\">\n\t\t\t<div class=\"header\" (click)=\"toggle()\">\n\t\t\t\t<ng-content select=\".header\"></ng-content>\n\t\t\t\t<span\n\t\t\t\t\tclass=\"pull-right glyphicon glyphicon-chevron-down\"\n\t\t\t\t\t*ngIf=\"!isExpanded\">\n\t\t\t\t</span>\n\t\t\t\t<span\n\t\t\t\t\tclass=\"pull-right glyphicon glyphicon-chevron-up\"\n\t\t\t\t\t*ngIf=\"isExpanded\">\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"content\" *ngIf=\"isExpanded\">\n\t\t\t\t<ng-content select=\".content\"></ng-content>\n\t\t\t</div>\n\t\t</div>\n\t",
                        styles: ["\n\t\t.zippy {\n\t\t\tmargin: 5px 0;\n\t\t}\n\t\t.zippy .header {\n\t\t\tmax-width: 500px;\n\t\t\tborder: 1px solid gray;\n\t\t\tbackground: gray;\n\t\t\tcolor: white;\n\t\t\tpadding: 20px;\n\t\t}\n\n\t\t.zippy .content {\n\t\t\tmax-width: 500px;\n\t\t\tborder: 1px solid gray;\n\t\t\tbackground: #d1d2d4;\n\t\t\tcolor: white;\n\t\t\tpadding: 20px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Zippy);
                return Zippy;
            }());
            exports_1("Zippy", Zippy);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map