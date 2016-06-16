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
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.vote = new core_2.EventEmitter();
                }
                VoterComponent.prototype.onClick = function (state) {
                    if (this.voterObj.state !== state) {
                        this.vote.emit({ state: state });
                    }
                };
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "\n\t\t<div class=\"voter\">\n\t\t\t<i\n\t\t\t\tclass=\"glyphicon glyphicon-menu-up\"\n\t\t\t\t[class.active]=\"voterObj.state === 1\"\n\t\t\t\t(click)=\"onClick(1)\"\n\t\t\t></i>\n\t\t\t{{voterObj.totalVotes}}\n\t\t\t<i\n\t\t\t\tclass=\"glyphicon glyphicon-menu-down\"\n\t\t\t\t[class.active]=\"voterObj.state === -1\"\n\t\t\t\t(click)=\"onClick(-1)\"\n\t\t\t></i>\n\t\t</div>\n\t",
                        styles: ["\n\t\t.voter {\n\t\t\twidth: 30px;\n\t\t\tfont-size: 25px;\n\t\t\tcolor: #999;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.glyphicon{\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.active {\n\t\t\tcolor: orange;\n\t\t}\n\t"],
                        inputs: ['voterObj'],
                        outputs: ['vote']
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map