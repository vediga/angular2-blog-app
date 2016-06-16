System.register(["angular2/core", "./todo.service"], function(exports_1, context_1) {
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
    var core_1, todo_service_1;
    var TodoSummary;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodoSummary = (function () {
                function TodoSummary(todoService) {
                    this.todoService = todoService;
                }
                TodoSummary.prototype.getCompletedPercentage = function () {
                    var numCompleted = 0;
                    var totalTasks = this.todoService.todos.length;
                    this.todoService.todos.forEach(function (task) {
                        if (task.status)
                            numCompleted++;
                    });
                    return totalTasks ?
                        Math.floor((numCompleted / totalTasks) * 100) : 0;
                };
                TodoSummary = __decorate([
                    core_1.Component({
                        selector: 'todo-summary',
                        template: "\n\t\t<div>\n\t\t\t<div class=\"progress\" *ngIf=\"getCompletedPercentage()\">\n\t    \t\t<div\n\t    \t\t\tclass=\"progress-bar\"\n\t    \t\t\trole=\"progressbar\"\n\t    \t\t\t[style.width]=\"getCompletedPercentage() + '%'\">\n\t      \t\t\t{{getCompletedPercentage() + '%'}}\n\t    \t\t</div>\n\t  \t\t</div>\n\t  \t\t<div\n\t  \t\t\t*ngIf=\"!getCompletedPercentage()\"\n\t  \t\t\tclass=\"alert alert-info\">\n\t  \t\t\tNo progress to show\n\t  \t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoSummary);
                return TodoSummary;
            }());
            exports_1("TodoSummary", TodoSummary);
        }
    }
});
//# sourceMappingURL=todo-summary.component.js.map