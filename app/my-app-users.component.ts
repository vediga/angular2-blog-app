import {Component, OnInit} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {SpinnerComponent} from "./my-app-spinner.component";
import {UsersService} from "./my-app-users.service";
import {User} from "./my-app-user.model";

@Component({
	selector: 'users',
	template: `
		 <div class="users">
			<h1>Users</h1>
			<spinner [visible]="loading"></spinner>
			<div *ngIf="!loading">
				<p>
					<a class="btn btn-primary btn-xs" [routerLink]="['NewUser']">Add User</a>
				</p>
				<table class="table table-bordered">
				    <thead>
				      <tr>
				        <th>Name</th>
				        <th>Email</th>
				        <th>Edit</th>
				        <th>Delete</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr *ngFor="#user of users">
				        <td>{{user.name}}</td>
				        <td>{{user.email}}</td>
				        <td><a [routerLink]="['ExistingUser', {id : user.id}]"><span class="glyphicon glyphicon-edit"></span></a></td>
				        <td><span class="glyphicon glyphicon-remove" (click)="deleteUser(user)"></span></td>
				      </tr>
				    </tbody>
				  </table>
			</div>
		  <div>
	`,
	providers: [UsersService],
	directives: [ROUTER_DIRECTIVES, SpinnerComponent]
})
export class UsersComponent implements OnInit {
	users: any[];
	loading = true;

	constructor(private _service: UsersService) {

    }

    ngOnInit() {
		this.getUsers();
    }

    getUsers() {
		this._service.getUsers().subscribe(us => {
			this.users = us;
			this.loading = false;
        });
    }

    deleteUser(user: User) {
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			this._service.deleteUser(user)
				.subscribe(data => {
					this.getUsers();
				});
		}
    }
}
