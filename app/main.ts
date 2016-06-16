import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent} from './app.component';
import {MyAppComponent} from './my-app.component';
// import {TodoService} from './todo.service';

// bootstrap(AppComponent, [ROUTER_PROVIDERS, TodoService]);
bootstrap(MyAppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
