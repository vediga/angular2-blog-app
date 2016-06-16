import {Component} from "angular2/core";
import {AuthorsService} from "./authors.service";

@Component({
	selector: 'authors',
	template:`
		<h1>Authors</h1>
		<h3>{{title}}</h3>
		<ul>
			<li *ngFor="#author of authors">
				{{author}}
			</li>
		</ul>
	`,
	providers: [AuthorsService]
})
export class AuthorsComponent {
	title: string = 'Title for the authors page';
	authors: string[];

	constructor (authorsService: AuthorsService) {
		this.authors = authorsService.get();
	}
}
