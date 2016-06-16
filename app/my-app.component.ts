import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {MyAppNavbarComponent} from './my-app-navbar.component';
import {HomeComponent} from './my-app-home.component';
import {UsersComponent} from './my-app-users.component';
import {UserComponent} from './my-app-user.component';
import {PostsComponent} from './my-app-posts.component';
import {NotFoundComponent} from './my-app-not-found.component';

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/users/:id', name: 'ExistingUser', component: UserComponent },
    { path: '/users/new', name: 'NewUser', component: UserComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: `
        <div class="my-app">
            <my-app-navbar></my-app-navbar>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
	    </div>
    `,
    directives: [ROUTER_DIRECTIVES, MyAppNavbarComponent]
})
export class MyAppComponent {
}
