import {Component} from "angular2/core";


@Component({
	selector: 'zippy',
	template: `
		<div class="zippy">
			<div class="header" (click)="toggle()">
				<ng-content select=".header"></ng-content>
				<span
					class="pull-right glyphicon glyphicon-chevron-down"
					*ngIf="!isExpanded">
				</span>
				<span
					class="pull-right glyphicon glyphicon-chevron-up"
					*ngIf="isExpanded">
				</span>
			</div>
			<div class="content" *ngIf="isExpanded">
				<ng-content select=".content"></ng-content>
			</div>
		</div>
	`,
	styles: [`
		.zippy {
			margin: 5px 0;
		}
		.zippy .header {
			max-width: 500px;
			border: 1px solid gray;
			background: gray;
			color: white;
			padding: 20px;
		}

		.zippy .content {
			max-width: 500px;
			border: 1px solid gray;
			background: #d1d2d4;
			color: white;
			padding: 20px;
		}
	`]
})
export class Zippy {
	isExpanded: boolean = false;

	toggle() {
		this.isExpanded = !this.isExpanded;
	}
}
