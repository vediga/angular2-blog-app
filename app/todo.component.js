System.register(['angular2/core', './todo-input.component', './todo-list.component', './todo-progress.component'], function(exports_1, context_1) {
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
    var core_1, todo_input_component_1, todo_list_component_1, todo_progress_component_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_input_component_1_1) {
                todo_input_component_1 = todo_input_component_1_1;
            },
            function (todo_list_component_1_1) {
                todo_list_component_1 = todo_list_component_1_1;
            },
            function (todo_progress_component_1_1) {
                todo_progress_component_1 = todo_progress_component_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent() {
                }
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        template: "\n\t\t<div class=\"todo\">\n\t\t\t<h1 class=\"text-center\">Angular2 Todo</h1>\n\t\t\t<todo-progress></todo-progress>\n        \t<todo-list></todo-list>\n        \t<todo-input></todo-input>\n\t\t</div>\n\t",
                        directives: [todo_input_component_1.TodoInput, todo_list_component_1.TodoList, todo_progress_component_1.TodoProgress]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map