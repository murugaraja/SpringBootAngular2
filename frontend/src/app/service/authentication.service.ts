import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
      return this.http.get('http://localhost:8080/login?username='+username+'&password='+password)
    .map((response: Response) => {
        return response.json();
    });
}

}
