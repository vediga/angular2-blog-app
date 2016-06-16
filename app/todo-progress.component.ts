import {Component} from "angular2/core";
import {TodoService} from "./todo.service"

@Component({
	selector: 'todo-progress',
	template: `
		<div>
			<div
				class="progress"
				[style.visibility]="getProgressBarVisibility()">
	    		<div
	    			class="progress-bar"
	    			role="progressbar"
	    			[style.width]="getCompletedPercentage() + '%'">
	      			{{getCompletedPercentage() + '%'}}
	    		</div>
	  		</div>
	  		
		</div>
	`
})
export class TodoProgress {
	total: number;

	constructor(public todoService: TodoService) {

	}

	getProgressBarVisibility() {
		return this.getCompletedPercentage() ? 'visible' : 'hidden'
	}

	getCompletedPercentage() {
		var numCompleted = 0;
		var totalTasks = this.todoService.todos.length;

		this.todoService.todos.forEach(function (task) {
			if (task.status)
				numCompleted++;
		});

		return totalTasks ? 
				Math.floor((numCompleted / totalTasks) * 100) : 0;
	}
}