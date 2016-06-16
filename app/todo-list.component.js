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
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(todoService) {
                    this.todoService = todoService;
                }
                TodoList.prototype.deleteTodo = function (todo) {
                    this.todoService.delete(todo);
                };
                TodoList.prototype.editTodo = function (todo) {
                    // this.todoService.delete(todo);
                    todo.status = false;
                    todo.isEditable = !todo.isEditable;
                };
                TodoList.prototype.saveTodo = function (todo) {
                    this.todoService.update(todo);
                    todo.isEditable = !todo.isEditable;
                    // this.todoService.delete(todo);
                };
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        template: "\n\t\t<style>\n\t\t\t.completed-true {\n\t\t\t\tbackground: #A5C799;\n\t\t\t\ttext-decoration: line-through\n\t\t\t}\n\n\t\t\t.editable-true {\n\t\t\t\tborder: 1px solid black;\n\t\t\t\tfocus: true;\n\t\t\t\tbackground: white;\n\t\t\t}\n\t\t\t.fa-floppy-o {\n\t\t\t\tcolor: green;\n\t\t\t}\n\t\t</style>\n\t\t<table class=\"table\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Task</th>\n\t\t\t\t\t<th>Date Created</th>\n\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t<th>Actions</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"#todo of todoService.todos\" [ngClass]=\"'completed-' + todo.status\">\n\t\t\t\t\t<td [ngClass]=\"'editable-' + todo.isEditable\" [contentEditable]=\"todo.isEditable\">{{todo.title}}</td>\n\t\t\t\t\t<td>{{todo.createdOn}}</td>\n\t\t\t\t\t<td><input type=\"checkbox\" [(ngModel)]=\"todo.status\"></td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<i class=\"fa fa-trash-o fa-2x\" (click)=deleteTodo(todo)></i>\n\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o fa-2x\" *ngIf=\"!todo.isEditable\" (click)=editTodo(todo)></i>\n\t\t\t\t\t\t<i class=\"fa fa-floppy-o fa-2x\" *ngIf=\"todo.isEditable\" (click)=saveTodo(todo)></i>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t"
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoList);
                return TodoList;
            }());
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=todo-list.component.js.map