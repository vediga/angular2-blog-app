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
    var Poller;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Poller = (function () {
                function Poller() {
                    this.selection = null;
                    this.totalVotes = 0;
                    this.submitted = false;
                }
                Poller.prototype.findTotalVotes = function () {
                    if (!this.totalVotes) {
                        _.forEach(this.pollObj.options, function (opt) {
                            this.totalVotes += opt.count;
                        }.bind(this));
                    }
                };
                Poller.prototype.getPercentage = function (count) {
                    this.findTotalVotes();
                    return Math.floor((count / this.totalVotes) * 100);
                };
                Poller.prototype.setSelection = function (value) {
                    this.selection = value;
                };
                Poller.prototype.showProgress = function () {
                    var opt = _.find(this.pollObj.options, { text: this.selection });
                    opt.count++;
                    this.submitted = true;
                };
                Poller = __decorate([
                    core_1.Component({
                        selector: 'poller',
                        template: "\n\t\t<div class=\"poller\">\n\t\t\t<div class=\"prog-bars\" *ngIf=\"submitted\" class=\"well\">\n\t\t\t\t<p>{{pollObj.question}}</p>\n\t\t\t\t<div  *ngFor=\"#option of pollObj.options\">\n\t\t\t\t\t<div>{{ option.text }}</div>\n\t\t\t\t\t<div class=\"progress\">\n\t\t\t    \t\t<div\n\t\t\t    \t\t\tclass=\"progress-bar\"\n\t\t\t    \t\t\trole=\"progressbar\"\n\t\t\t    \t\t\t[style.width]=\"getPercentage(option.count)+ '%'\">\n\t\t\t      \t\t\t{{ getPercentage(option.count) + '%'}}\n\t\t\t    \t\t</div>\n\t\t\t  \t\t</div>\n\t\t\t  \t</div>\n\t\t\t</div>\n\t\t\t<div class=\"well\" *ngIf=\"!submitted\">\n\t\t\t\t<p>{{pollObj.question}}</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"#option of pollObj.options\">\n\t\t\t\t\t\t<div class=\"radio\">\n  \t\t\t\t\t\t\t<label><input type=\"radio\" name=\"options\" (click)=\"setSelection(option.text)\">\n  \t\t\t\t\t\t\t\t{{option.text}}\n  \t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<button class=\"btn btn-primary\" [disabled]=\"!selection\" (click)=\"showProgress()\">submit</button>\n\t\t\t</div>\n\t\t</div>\n\t",
                        styles: ["\n\t\t.poller {\n\t\t\tmargin: 10px 0;\n\t\t}\n\t"],
                        inputs: ['pollObj']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Poller);
                return Poller;
            }());
            exports_1("Poller", Poller);
        }
    }
});
//# sourceMappingURL=poller.component.js.map