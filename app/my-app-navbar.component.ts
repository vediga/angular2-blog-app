import {Component} from "angular2/core";
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'my-app-navbar',
	template: `
		<div class="my-app-navbar">
			<nav class="navbar navbar-default">
			  <div class="container-fluid">
			    <div class="navbar-header">
			      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-details">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			      <a class="navbar-brand" [routerLink]="['Home']">Vikas Ediga</a>
			    </div>

			    <div class="collapse navbar-collapse" id="nav-details">
			      <ul class="nav navbar-nav">
			        <li [class.active]="isRouteActive('Users')">
			        	<a [routerLink]="['Users']">Users</a>
			       	</li>
			        <li [class.active]="isRouteActive('Posts')">
			        	<a [routerLink]="['Posts']">Posts</a>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
		</div>
	`,
	directives: [ROUTER_DIRECTIVES]
})
export class MyAppNavbarComponent {
	constructor(private _router: Router) {

	}

	isRouteActive(route) {
		var instruction = this._router.generate([route]);
		return this._router.isRouteActive(instruction);
	}
}
