import {Injectable} from "angular2/core";

@Injectable()
export class TweetService {
	getTweets() {
		return [{
			name: 'Windward',
			id: '@windwardstudios',
			content: 'Looking for a better company reporting or docgen app?',
			imgUrl: 'http://www.lorempixel.com/100/100?1',
			likes: {
				numLikes: 5,
				isLiked: true
			}
		},
		{
			name: 'AngularJS News',
			id: '@angularjs_news',
			content: 'Want to build a new angular js app?',
			imgUrl: 'http://www.lorempixel.com/100/100?2',
			likes: {
				numLikes: 15,
				isLiked: false
			}
		},
		{
			name: 'Southwest Airlines',
			id: '@southwest_airlines',
			content: 'Southwest - the best airlines !!',
			imgUrl: 'http://www.lorempixel.com/100/100?3',
			likes: {
				numLikes: 25,
				isLiked: true
			}
		},
		{
			name: 'AngularJS 2 News',
			id: '@angularjs_news',
			content: 'Want to build a new angular js app?',
			imgUrl: 'http://www.lorempixel.com/100/100?4',
			likes: {
				numLikes: 150,
				isLiked: false
			}
		}];
	}
}
