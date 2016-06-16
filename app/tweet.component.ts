import {Component} from "angular2/core";
import {LikeComponent} from "./like.component";

@Component({
	selector: 'tweet',
	directives: [LikeComponent],
	template: `
		<div class="tweet">
			<div class="media">
			  <div class="media-left">
			    <a href="#">
			      <img class="media-object" [src]="tweet.imgUrl" alt="missing image">
			    </a>
			  </div>
			  <div class="media-body">
			    <h3 class="media-heading">
					{{tweet.name}} <span class="tweet-id">{{tweet.id}}</span>
			    </h3>
			    {{tweet.content}}
			    <like
			    	[likesCount]="tweet.likes.numLikes"
                    [isLiked]="tweet.likes.isLiked"
                    (onStateChange)="onLikeStateChange($event)">
			    </like>
			  </div>
			</div>
		</div>
	`,
	inputs: ['tweet'],
	styles: [`
		.tweet {
			margin: 20px 0;
			font-size: 20px;
		}
		.tweet-id {
			color: #999;
		}
	`]
})
export class TweetComponent {
	onLikeStateChange(data) {
		var likeObj = this.tweet.likes;

        if (likeObj.isLiked) {
            if (!data.isLiked)
                likeObj.numLikes--;
        } else {
            if (data.isLiked)
                likeObj.numLikes++;
        }
        likeObj.isLiked = data.isLiked;
    }
}
