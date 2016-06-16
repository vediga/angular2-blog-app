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
    var TodoListItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoListItem = (function () {
                function TodoListItem() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoListItem.prototype, "todo", void 0);
                TodoListItem = __decorate([
                    core_1.Component({
                        selector: 'todo-list-item',
                        template: "\n\t\t<td>{{todo.title}}</td>\n\t\t<td><input type=\"checkbox\" [(ngModel)]=\"todo.status\"></td>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoListItem);
                return TodoListItem;
            }());
            exports_1("TodoListItem", TodoListItem);
        }
    }
});
//# sourceMappingURL=todo-list-item.js.map