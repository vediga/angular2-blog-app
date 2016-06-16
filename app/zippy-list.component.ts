import {Component} from "angular2/core";

@Component({
	selector: 'zippy-list',
	template: `
		<div class="zippy-list">
			<div class="row">
				<div class="col-md-4">
					<ul>
						<li>
							one
						</li>
					</ul>
				</div>
				<div class="col-md-8">
					all the looooooooooooooong content goes here
				</div>
			</div>
		</div>
	`,
	styles: [`
		
	`]
})
export class ZippyList {
}
