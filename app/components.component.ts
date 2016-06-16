import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router, RouteConfig} from 'angular2/router';

import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {ComponentsNavbarComponent} from './components-navbar.component';
import {TweetsComponent} from './tweets.component';
import {VoterComponent} from './voter.component';

@RouteConfig([
	{ path: '/authors', name: 'Authors', component: AuthorsComponent},
    { path: '/favorite', name: 'Favorite', component: FavoriteComponent},
    { path: '/like', name: 'Like', component: LikeComponent },
    { path: '/tweets', name: 'Tweets', component: TweetsComponent, useAsDefault: true },
    { path: '/voters', name: 'Voters', component: VoterComponent }
])
@Component({
	selector: 'components',
	template: `
		<div class="components">
			<div class="row">
				<div class="col-md-2">
                	<components-navbar></components-navbar>
                </div>
             	<div class="col-md-10">
					<router-outlet></router-outlet>
				</div>
			</div>
		</div>
	`,
	directives: [ROUTER_DIRECTIVES, AuthorsComponent, FavoriteComponent, LikeComponent, TweetsComponent, VoterComponent, ComponentsNavbarComponent]
})
export class ComponentsComponent {
}
