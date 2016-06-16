import {Component} from "angular2/core";
import {Router, RouteConfig} from 'angular2/router';

import {NavBar} from './nav-bar.component';


@Component({
	selector: 'components-navbar',
	template: `
		<div class="components-navbar">
			<nav-bar [navItems]="navItems" (change)="onNavChange($event)"></nav-bar>
		</div>
	`,
	directives: [NavBar]
})
export class ComponentsNavbarComponent {
	navItems: Object[] = [
        { title: 'Tweets', id: 'Tweets' },
        { title: 'Favorite', id: 'Favorite' },
        { title: 'Like', id: 'Like' }
    ];

	constructor(private _router: Router) {

	}

    onNavChange(data) {
		this._router.navigate([`${data.id}`]);
    }
}
