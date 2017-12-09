import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
        private apiURL = 'https://ng5-techbook.firebaseio.com/data.json';
        private headers = new Headers({'Content-Type': 'application/json'});
        private options = new RequestOptions({headers: this.headers});

        constructor(private http: Http) { }

        storeServers(servers: any[]) {
          // return this.http.post(this.apiURL, servers, this.options);
          return this.http.put(this.apiURL, servers, this.options);
        }


    getAppName() {
        return this.http.get('https://ng5-techbook.firebaseio.com/data/appName.json')
                        .map((response: Response) => {
                            return response.json();
                        });
    }

        getServers() {
          return this.http.get(this.apiURL).map(
            (response: Response) => {
              const data = response.json();
              for (const server of data) {
                server.name = 'FETCHED_' + server.name;
              }
              return data;
            }
          )
          .catch((error: Response) => {
              console.log(error);
              return Observable.throw('Something went wrong');
          });
    }
}
