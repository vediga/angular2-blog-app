import {Component} from 'angular2/core';

import {TodoInput} from './todo-input.component';
import {TodoList} from './todo-list.component';
import {TodoProgress} from './todo-progress.component';

@Component({
	selector: 'todo',
	template: `
		<div class="todo">
			<h1 class="text-center">Angular2 Todo</h1>
			<todo-progress></todo-progress>
        	<todo-list></todo-list>
        	<todo-input></todo-input>
		</div>
	`,
	directives: [TodoInput, TodoList, TodoProgress]
})
export class TodoComponent {

}
