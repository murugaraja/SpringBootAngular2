import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    getUserData(memberId: String){
      return this.http.get('http://localhost:8080/getUser?memberId='+memberId)
        .map((res:Response) => res.json());
    }

    enrol (model:any){
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:8080/enrol', JSON.stringify(model), headers )
        .map((response: Response) => {
          console.log('Response data : '+JSON.stringify(model));
        });
    }
}
