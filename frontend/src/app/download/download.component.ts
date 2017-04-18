import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from "../service/user.service";

@Component({
    selector:'app',
    templateUrl: 'download.component.html'
})

export class DownloadComponent implements OnInit {
  model:any = {};
  loading = false;
  token:String;
  ULink: String;

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
      this.token = params['token'];
    });

    this.ULink = 'https://itunes.apple.com/us/app/apple-store/id375380948?token='+this.token;
  }
}
