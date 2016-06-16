import {Component, OnInit} from "angular2/core";

import {User} from "./my-app-user.model";
import {SpinnerComponent} from "./my-app-spinner.component";
import {UsersService} from "./my-app-users.service";
import {PostService} from "./my-app-post.service";

@Component({
	selector: 'posts',
	template: `
		<div class="posts">
			<h1>Posts</h1>
			<div class="row">
				<div class="col-md-6">
					<spinner [visible]="loading"></spinner>
					<select class="form-control">
						<option>select a user ...</option>
						<option *ngFor="#user of users">
							{{user.name}}
						</option>
					</select>
					<ul class="list-group">
						<li *ngFor="#post of posts" class="list-group-item" (click)="showDetail(post)">
							{{post.title}}
						</li>
					</ul>
				</div>
				<div class="col-md-6" *ngIf="selectedPost">
					<div class="panel panel-default">
						<div class="panel-heading">
					    	<h3 class="panel-title">{{selectedPost.title}}</h3>
					  	</div>
					  	<div class="panel-body">
						    {{selectedPost.body}}
						    <hr/>
						    <spinner [visible]="loadingComments"></spinner>
						    <div *ngIf="!loadingComments">
						    	<div *ngFor="#comment of comments">
									<div class="media">
									  <div class="media-left">
									    <img class="media-object" [src]="'http://www.lorempixel.com/80/80/people?random=' + comment.id">
									  </div>
									  <div class="media-body">
									    <h4 class="media-heading">{{comment.name}}</h4>
									    {{comment.body}}
									  </div>
									</div>
									<br>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: [`
		.posts	li	{	cursor:	default;	}
		.posts	li:hover	{	background:	#ecf0f1;	}	
		.list-group-item.active,	
		.list-group-item.active:hover,	
		.list-group-item.active:focus	{	
			 background-color:	#ecf0f1;
			 border-color:	#ecf0f1;	
			 color:	#2c3e50;
		}

		img {
			border-radius: 100%;
		}
	`],
	providers: [PostService, UsersService],
	directives: [SpinnerComponent]
})
export class PostsComponent implements OnInit {
	posts: Object[] = [];
	loading: boolean = true;
	selectedPost;
	users: User[] = [];
	comments: Object[] = [];
	loadingComments: boolean;

	constructor(private _service: PostService, private _userService: UsersService) {

	}

	ngOnInit() {
		this._service.getPosts()
			.subscribe(posts => {
				this.posts = posts;
				this.loading = false;
			});

		this._userService.getUsers()
			.subscribe(users => {
				this.users = users;
			});
	}

	showDetail(post) {
		this.selectedPost = post;
		this.loadingComments = true;
		this._service.getComments(post)
			.subscribe(comments => {
				this.comments = comments;
				this.loadingComments = false;
			});
	}
}
