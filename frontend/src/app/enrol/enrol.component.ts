import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from "../service/user.service";

@Component({
    selector:'app',
    templateUrl: 'enrol.component.html'
})

export class EnrolComponent implements OnInit {
  model:any = {};
  loading = false;
  memberId:String;
  token: String;

  constructor(private router:Router,
              private userService:UserService,
              private activatedRoute:ActivatedRoute,
              private http: Http) {
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params) => {
      this.memberId = params['id'];
    });

    this.userService.getUserData(this.memberId).subscribe(
      (data) => {
        console.log(data);
        this.model.memberId = data.memberId;
        this.model.accountId = data.accountId;
        this.model.pointBalance = data.pointBalance;
        this.model.firstName = data.firstName;
        this.model.middleInitial = data.middleInitial;
        this.model.lastName = data.lastName;
        this.model.cellPhone = data.cellPhone;
        this.model.email = data.email;
        this.model.customRewardsEligibility = data.customRewardsEligibility;
        this.model.memberStatus = data.memberStatus;
        this.model.token = data.token;
        this.model.programId = data.programId;
        this.model.varProgram = data.varProgram;
      },
      (err) => console.log(err),
      () => console.log('Register service completed')
    );
  }

  enrol() {
    this.userService.enrol(this.model).subscribe(
      data => {
        this.router.navigate(['download',this.model.token]);
      },
      error => {
        this.loading = false;
      });
  }
}
