import {Component} from 'angular2/core';
import {TodoService} from './todo.service';
import {TodoModel} from './todo-model';

@Component({
	selector: "todo-input",
	template:`
		<form (submit)="addItem()">
			Enter the todo item: <input class="form-control" type="text" [(ngModel)]="newTodo" autofocus>
		</form>
	`
})
export class TodoInput {
	newTodo:String;

	constructor(public todoService:TodoService) {
		console.log(todoService)
		if (this.todoService.todos.length <= 0) {
			this.todoService.add(new TodoModel('eat'));
			this.todoService.add(new TodoModel('sleep'));
			this.todoService.add(new TodoModel('code :)'));
		}
	}

	addItem() {
		this.todoService.add(new TodoModel(this.newTodo));
		this.newTodo = '';
	}
}