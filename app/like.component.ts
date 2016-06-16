import {Component} from "angular2/core";
import {EventEmitter} from "angular2/core";

@Component({
	selector: 'like',
	template: `<div>
			<i
				class="glyphicon glyphicon-heart"
				[class.liked]="isLiked"
				(click)="onChange()"
				></i>
			<span class="likesCount">{{likesCount}}</span>
		</div>
	`,
	inputs: ['likesCount', 'isLiked'],
	outputs: ['change:onStateChange'],
	styles: [`
		.glyphicon-heart {
			color: #ccc;
			font-size: 25px;
			cursor: pointer;
		}
		.liked {
			color: deeppink;
		}
		.likesCount {
			font-size: 25px;
		}
	`]
})
export class LikeComponent {
	change = new EventEmitter();

	onChange() {
		var isLiked = !this.isLiked;
		this.change.emit({ isLiked: isLiked });
	}
}
