import {Component, OnInit} from "angular2/core";
import {FormBuilder, ControlGroup, Validators} from "angular2/common";
import {Router, RouteParams, CanDeactivate} from "angular2/router";

import {SpinnerComponent} from "./my-app-spinner.component";
import {EmailValidator} from "./my-app-email.validator";
import {UsersService} from "./my-app-users.service";
import {User} from "./my-app-user.model";

@Component({
    selector: 'new-user',
    template: `
        <div>
            <h1>{{title}}</h1>
            <div class="row">
              <div class="col-md-6 well">
                <spinner [visible]="loading"></spinner>
                <form *ngIf="!loading" [ngFormModel]="form" (ngSubmit)="saveUser()">
                  <fieldset>
                      <legend>User</legend>
                      <div class="form-group">
                        <label for="name">Name:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            ngControl="name"
                            [(ngModel)]="user.name"
                            #name="ngForm">
                        <div *ngIf="name.touched && name.errors">
                            <div *ngIf="name.errors.required" class="alert alert-danger">Name is required.</div>
                            <div *ngIf="name.errors.minlength" class="alert alert-danger">
                                Name must be atleast {{name.errors.minlength.requiredLength}} characters long.
                            </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="email">Email address:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="email"
                            ngControl="email"
                            [(ngModel)]="user.email"
                            #email="ngForm">
                        <div *ngIf="email.touched && !email.valid" class="alert alert-danger">
                            Please enter a valid email.
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="phone">Phone:</label>
                        <input type="text" class="form-control" id="phone" [(ngModel)]="user.phone">
                      </div>
                  </fieldset>
                  <fieldset ngControlGroup="address">
                      <legend>Address</legend>
                      <div class="form-group">
                        <label for="street">Street:</label>
                        <input type="text" class="form-control" id="street" [(ngModel)]="user.address.street">
                      </div>
                      <div class="form-group">
                        <label for="apartment">Apartment number:</label>
                        <input type="text" class="form-control" id="apartment" [(ngModel)]="user.address.suite">
                      </div>
                      <div class="form-group">
                        <label for="city">City:</label>
                        <input type="text" class="form-control" id="city" [(ngModel)]="user.address.city">
                      </div>
                      <div class="form-group">
                        <label for="zip">ZipCode:</label>
                        <input type="text" class="form-control" id="zip" [(ngModel)]="user.address.zipcode">
                      </div>
                  </fieldset>
                  <button
                      type="submit"
                      class="btn btn-primary"
                      [disabled]="!form.valid">
                      Save
                  </button>
                </form>
              </div>
            </div>
        </div>
    `,
    providers: [EmailValidator, UsersService],
    directives: [SpinnerComponent]
})
export class UserComponent implements CanDeactivate, OnInit {
    form: ControlGroup;
    submitted: boolean = false;
    loading: boolean = false;
    isNewUser: boolean;
    id;
    title: string;
    user = new User();

    constructor(fb: FormBuilder,
        ev: EmailValidator,
        private _router: Router,
        private _routeParams: RouteParams,
        private _service: UsersService) {

        this.form = fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            email:['', Validators.compose([Validators.required, ev.isValidEmail])],
            phone: [],
            address: fb.group({
                street:[],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    ngOnInit() {
        this.id = this._routeParams.get('id');

        if (this.id){
            this.title = 'Edit User';
            this.isNewUser = false;
        } else {
            this.title = 'New User';
            this.isNewUser = true;
            return;
        }

        this.loading = true;

        this._service.getUser(this.id).
            subscribe(
                data => {
                    this.user = data;
                    this.loading = false;
                },
                response => {
                    if(response.status === 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
    }

    routerCanDeactivate(next, prev) {
        if(this.form.dirty && !this.submitted) {
            return confirm('Are you sure?');
        }
        return true;
    }

    _createNewUser() {
        this._service.postUser(this.user).subscribe(data => {
            // TODO: Mark the form as pristine
            this.loading = false;
            this._router.navigate(['Users']);
        });
    }

    _updateUser() {
        this._service.putUser(this.user).subscribe(data => {
            // TODO: Mark the form as pristine
            this.loading = false
            this._router.navigate(['Users']);
        });
    }


    saveUser() {
        this.submitted = true;
        this.loading = true;

        if (this.isNewUser) {
            this._createNewUser();
        } else {
            this._updateUser();
        }
    }
}
