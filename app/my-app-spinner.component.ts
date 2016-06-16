import {Component} from "angular2/core";

@Component({
	selector: 'spinner',
	template: `
		<i *ngIf="visible" class="fa fa-spinner fa-spin fa-3x"></i>
	`,
	inputs: ['visible']
})
export class SpinnerComponent {

}
