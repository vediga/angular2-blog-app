import {Component} from "angular2/core";

@Component({
	selector: 'favorite',
	template:`
		<i
			class="glyphicon"
			[class.glyphicon-star]="isFav"
			[class.glyphicon-star-empty]="!isFav"
			(click)="toggle()">
		</i>
	`,
	styles: [`
		.glyphicon {
			font-size: 25px;
		}
	`]
})
export class FavoriteComponent {
	isFav: boolean = false;

	toggle() {
		this.isFav = !this.isFav;
	}
}
