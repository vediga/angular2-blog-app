import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';

@Component({
	selector: 'tweets',
	template: `
		<div class="tweets">
			<tweet *ngFor="#tweet of tweets" [tweet]="tweet">
	        </tweet>
	    </div>
	`,
	providers: [TweetService],
	directives: [TweetComponent]
})
export class TweetsComponent {
	tweets = [];

    constructor(ts: TweetService) {
        this.tweets = ts.getTweets();
    }
}
