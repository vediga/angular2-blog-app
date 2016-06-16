import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router, RouteConfig} from 'angular2/router';


@Component({
	selector: 'app-navbar',
	template: `
		<div class="app-navbar">
	 		<nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" [routerLink]="['Home']">ng2</a>
                </div>
                <ul class="nav navbar-nav">
                  <li><a [routerLink]="['Home']">Home</a></li>
                  <li><a [routerLink]="['Components']">Components</a></li>
                </ul>
              </div>
            </nav>
		</div>
	`,
	directives: [ROUTER_DIRECTIVES]
})
export class AppNavbarComponent {

}
