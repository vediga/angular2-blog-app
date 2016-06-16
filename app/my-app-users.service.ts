import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/Rx';

import {User} from "./my-app-user.model";

@Injectable()
export class UsersService {
	private _url = 'http://jsonplaceholder.typicode.com/users';

	constructor(private _http: Http) {

	}

	getUsers() {
		return this._http.get(this._url)
			.map(res => res.json());
	}

	getUser(id: number) {
		return this._http.get(this._url + '/' + id)
			.map(res => res.json());
	}

	putUser(user: User) {
		return this._http.put(this._url + '/' + user.id, JSON.stringify(user))
			.map(res => res.json());
	}

	deleteUser(user: User) {
		return this._http.delete(this._url + '/' + user.id)
			.map(res => res.json());
	}

	postUser(user: User) {
		return this._http.post(this._url, JSON.stringify(user))
			.map(res => res.json());
	}
}
