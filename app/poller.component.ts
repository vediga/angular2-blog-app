import {Component} from "angular2/core";


@Component({
	selector: 'poller',
	template: `
		<div class="poller">
			<div class="prog-bars" *ngIf="submitted" class="well">
				<p>{{pollObj.question}}</p>
				<div  *ngFor="#option of pollObj.options">
					<div>{{ option.text }}</div>
					<div class="progress">
			    		<div
			    			class="progress-bar"
			    			role="progressbar"
			    			[style.width]="getPercentage(option.count)+ '%'">
			      			{{ getPercentage(option.count) + '%'}}
			    		</div>
			  		</div>
			  	</div>
			</div>
			<div class="well" *ngIf="!submitted">
				<p>{{pollObj.question}}</p>
				<ul>
					<li *ngFor="#option of pollObj.options">
						<div class="radio">
  							<label><input type="radio" name="options" (click)="setSelection(option.text)">
  								{{option.text}}
  							</label>
						</div>
					</li>
				</ul>
				<button class="btn btn-primary" [disabled]="!selection" (click)="showProgress()">submit</button>
			</div>
		</div>
	`,
	styles: [`
		.poller {
			margin: 10px 0;
		}
	`],
	inputs: ['pollObj']
})
export class Poller {
	selection: string = null;
	totalVotes: number = 0;
	submitted: boolean = false;

	findTotalVotes() {
		if (!this.totalVotes) {
			_.forEach(this.pollObj.options, function(opt) {
				this.totalVotes += opt.count;
			}.bind(this));
		}
	}

	getPercentage(count: number) {
		this.findTotalVotes();
		return Math.floor((count / this.totalVotes) * 100);
	}

	setSelection(value) {
		this.selection = value;
	}

	showProgress() {
		var opt = _.find(this.pollObj.options, { text: this.selection });
		opt.count++;
		this.submitted = true;
	}
}
