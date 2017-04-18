import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthenticationService} from "../service/authentication.service";

@Component({
    selector:'app',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.model.warning = '';
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.loading = false;
                    console.log('inside data'+data);
                    if(data){
                        this.router.navigate(['enrol',this.model.username]);
                        this.model.warning = '';
                    } else {
                        this.model.warning = 'Invalid User';
                    }
                },
                error => {
                    this.loading = false;
                });
    }
}
