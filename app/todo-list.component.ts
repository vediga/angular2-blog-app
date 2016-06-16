import {Component} from "angular2/core";
import {TodoService} from "./todo.service";
import {TodoModel} from "./todo-model";

@Component({
	selector: 'todo-list',
	template: `
		<style>
			.completed-true {
				background: #A5C799;
				text-decoration: line-through
			}

			.editable-true {
				border: 1px solid black;
				focus: true;
				background: white;
			}
			.fa-floppy-o {
				color: green;
			}
		</style>
		<table class="table">
			<thead>
				<tr>
					<th>Task</th>
					<th>Date Created</th>
					<th>Status</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr *ngFor="#todo of todoService.todos" [ngClass]="'completed-' + todo.status">
					<td [ngClass]="'editable-' + todo.isEditable" [contentEditable]="todo.isEditable">{{todo.title}}</td>
					<td>{{todo.createdOn}}</td>
					<td><input type="checkbox" [(ngModel)]="todo.status"></td>
					<td>
						<i class="fa fa-trash-o fa-2x" (click)=deleteTodo(todo)></i>
						<i class="fa fa-pencil-square-o fa-2x" *ngIf="!todo.isEditable" (click)=editTodo(todo)></i>
						<i class="fa fa-floppy-o fa-2x" *ngIf="todo.isEditable" (click)=saveTodo(todo)></i>
					</td>
				</tr>
			</tbody>
		</table>
	`
})
export class TodoList {
	constructor(public todoService:TodoService) {

	}

	deleteTodo(todo:TodoModel) {
		this.todoService.delete(todo);
	}

	editTodo(todo: TodoModel) {
		// this.todoService.delete(todo);
		todo.status = false;
		todo.isEditable = !todo.isEditable;
	}

	saveTodo(todo: TodoModel) {
		this.todoService.update(todo);
		todo.isEditable = !todo.isEditable;
		// this.todoService.delete(todo);
	}
}