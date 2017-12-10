import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

let options = {};
const BASE_URL = 'https://twit-sentiment.herokuapp.com/twit/';


@Injectable()
export class TweetHttpService {

  data: any;
  body: any;

  constructor(private http: Http) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    options = new RequestOptions({ headers: headers });
   }

   public getToken(): string {
     return 'abcxyzde';
   }

   getAllTweets(user): Observable<any> {
     return this.http.get(BASE_URL + user, options)
                     .map((response: Response) => {
                       this.data = response;
                       this.body = JSON.parse(this.data._body);
                       return this.body;
                     })
                     .catch((error, caught) => caught);
                  }


  private handleError(error: any, caught: Observable<any>) {
    console.error('An error occured: ', error);
    }

}
