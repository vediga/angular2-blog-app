import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';

import {ComponentsComponent} from './components.component';
import {TodoComponent} from './todo.component';
import {AppNavbarComponent} from './app-navbar.component';

@RouteConfig([
    {path: '/', name: 'Home', component: TodoComponent},
    {path: '/components/...', name: 'Components', component: ComponentsComponent}
])
@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, TodoComponent, AppNavbarComponent],
    template: `
    	<div class="container well">
    		<div class="row">
                <div class="col-md-12">
                    <app-navbar></app-navbar>
                    <router-outlet></router-outlet>
                </div>
		    </div>
	    </div>
    `
})
export class AppComponent {
}
