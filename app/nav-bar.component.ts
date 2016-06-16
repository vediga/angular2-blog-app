import {Component, EventEmitter} from "angular2/core";
import {NgClass} from 'angular2/common';

@Component({
	selector: 'nav-bar',
	template: `
		<ul class="nav nav-pills nav-stacked">
			<li
					*ngFor="#item of navItems; #index = index"
					(click)="onClick($event, item.id)"
					[ngClass]="{
						active: activeId === item.id || (!activeId && index === 0)
					}">
				<a>{{item.title}}</a>
			</li>
		</ul>
	`,
	outputs: ['change'],
	inputs: ['navItems']
})
export class NavBar {
	activeId: string;
	change = new EventEmitter();

	onClick(e, id) {
		this.activeId = id;
		this.change.emit({event: e, id: id});
	}
}