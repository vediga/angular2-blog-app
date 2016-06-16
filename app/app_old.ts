import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBar} from './nav-bar.component';
import {Zippy} from './zippy.component';
import {Poller} from './poller.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';
import {TweetComponent} from './tweet.component';
import {TodoComponent} from './todo.component';
import {TweetService} from './tweet.service';
import {RouteConfig} from 'angular2/router';


@RouteConfig([
    {path: '/', name: 'Home', component: TodoComponent},
    {path: '/components/zippy', name: 'Home', component: Zippy}
])
@Component({
    selector: 'app',
    directives: [TodoComponent, NavBar, Zippy, Poller, AuthorsComponent, FavoriteComponent, LikeComponent, VoterComponent, TweetComponent ],
    providers: [TweetService],
    template: `
    	<div class="container well">
    		<div class="row">
                <div class="col-md-3">
                    <nav-bar [navItems]="navItems" (change)="onNavChange($event)">Nav Bar</nav-bar>
                </div>
                <div class="col-md-9">
        			<div *ngIf="activeAppId === 'app_0'">
                        
                        <todo></todo>
                        
                    </div>

                    <div *ngIf="activeAppId === 'app_1'">
                        <h1 class="text-center">Components</h1>
                        <div *ngIf="false">
                            <h2>Zippy</h2>
                            <zippy>
                                <div class="header">Notifications <span class="badge badge-primary">2</span></div>
                                <div class="content">
                                    <div class="alert alert-danger">Danger</div>
                                    <div class="alert alert-info">Info</div>
                                </div>
                            </zippy>
                            <br/>
                            <poller [pollObj]="pollObj"></poller>
                            <br/>
                            <authors></authors>
                            <br/>
                            <favorite></favorite>
                            <br/>
                            <like
                                [likesCount]="likeObject.numLikes"
                                [isLiked]="likeObject.isLiked"
                                (onStateChange)="onLikeStateChange($event)">
                            </like>
                        </div>
                        <br/>
                        <voter [voterObj]="voterObj" (vote)="onVote($event)"></voter>
                        <br/>
                        <tweet *ngFor="#tweet of tweets" [tweet]="tweet">
                        </tweet>
                    </div>

                    <div *ngIf="activeAppId === 'app_2'">
                        <h1 class="text-center">Under construction</h1>
                    </div>
                </div>
		    </div>
	    </div>
    `
})
export class AppComponent {
    navItems: Object[] = [
        { title: 'Todo App', id: 'app_0' },
        { title: 'Components', id: 'app_1' },
        { title: 'Some other App', id: 'app_2' }
    ];
    activeAppId: string = 'app_0';
    likeObject: Object = { numLikes: 100, isLiked: true };

    pollObj = {
        question: "Ask a question for a public poll?",
        options: [{ text: "option1", count: 1 }, { text: "option2", count: 20}, { text: "option3", count: 30 }, { text: "option4", count: 12 }]
    };

    voterObj = {
        totalVotes: 100,
        state: -1
    };
    tweets = [];

    constructor(ts: TweetService) {
        this.tweets = ts.getTweets();
    }

    onVote(data) {
        this.voterObj.state += data.state;
        this.voterObj.totalVotes += data.state;
    }

    onNavChange(data) {
        this.activeAppId = data.id;
    }

    onLikeStateChange(data){
        if (this.likeObject.isLiked) {
            if (!data.isLiked)
                this.likeObject.numLikes--;
        } else {
            if (data.isLiked)
                this.likeObject.numLikes++;
        }
        this.likeObject.isLiked = data.isLiked;
    }
}
