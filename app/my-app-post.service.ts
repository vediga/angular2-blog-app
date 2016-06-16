import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable, Inject} from 'angular2/core';

@Injectable()
export class PostService {
	private _url: string = 'http://jsonplaceholder.typicode.com/posts';

	constructor(private _http: Http){

	}

	getPosts() {
		return this._http.get(this._url)
			.map(res => res.json());
	}

	getComments(post) {
		return this._http.get(this._url + '/' + post.id + '/comments')
			.map(res => res.json());
	}
}
