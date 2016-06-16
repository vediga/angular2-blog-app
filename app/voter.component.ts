import {Component} from "angular2/core";
import {EventEmitter} from "angular2/core";

@Component({
	selector: 'voter',
	template: `
		<div class="voter">
			<i
				class="glyphicon glyphicon-menu-up"
				[class.active]="voterObj.state === 1"
				(click)="onClick(1)"
			></i>
			{{voterObj.totalVotes}}
			<i
				class="glyphicon glyphicon-menu-down"
				[class.active]="voterObj.state === -1"
				(click)="onClick(-1)"
			></i>
		</div>
	`,
	styles:[`
		.voter {
			width: 30px;
			font-size: 25px;
			color: #999;
			text-align: center;
		}
		.glyphicon{
			cursor: pointer;
		}
		.active {
			color: orange;
		}
	`],
	inputs: ['voterObj'],
	outputs: ['vote']

})
export class VoterComponent {
	vote = new EventEmitter();

	onClick(state) {
		if(this.voterObj.state !== state) {
			this.vote.emit({ state: state });
		}
	}
}
