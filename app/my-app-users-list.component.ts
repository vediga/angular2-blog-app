import {Component, OnInit} from "angular2/core";

import {UsersService} from "./my-app-users.service"

@Component({
	selector: 'users',
	template: `
		 <div class="users">
			 <h1>Users</h1>
			 <i *ngIf="loading" class="fa fa-spinner fa-spin fa-3x"></i>
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
			        <td><span class="glyphicon glyphicon-edit"></span></td>
			        <td><span class="glyphicon glyphicon-remove"></span></td>
			      </tr>
			    </tbody>
			  </table>
		  <div>
	`,
	providers: [UsersService]
})
export class UsersListComponent implements OnInit {
	users: any[];
	loading = true;

	constructor(private _service: UsersService) {

    }

    ngOnInit() {
		this._service.getUsers().subscribe(us => {
			this.users = us;
			this.loading = false;
        });
    }
}
