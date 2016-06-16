import {Injectable} from "angular2/core";
import {TodoModel} from "./todo-model";

@Injectable()
export class TodoService {
	todos:TodoModel[] = [];

	add(todo:TodoModel) {
		if (todo.title.trim()){
			this.todos.push(todo);
		}
	}

	delete(todo:TodoModel) {
		let findIndexFn = function(element, index, array) {
			if (element.title === todo.title && element.id === todo.id) {
				return true;
			}
			return false;
		};
		let deleteIndex = this.todos.findIndex(findIndexFn);

		if (deleteIndex !== -1) {
			this.todos.splice(deleteIndex, 1);
		}
	}

	update(todo: TodoModel) {
		let findIndexFn = function(element, index, array) {
			if (element.id === todo.id) {
				return true;
			}
			return false;
		};
		let updateIndex = this.todos.findIndex(findIndexFn);

		if (updateIndex !== -1) {
			todo.createdOn = Date().slice(0, 24);
			this.todos[updateIndex] = todo;
		}
	}
}