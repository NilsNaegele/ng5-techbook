import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article',
  template: `
      <p>Article Component!</p>
  `
})
export class ArticleComponent { }


@Injectable()
export class APIService {
  constructor(private http: HttpClient) { }
  search(query: string): Observable<string> {
    return this.http.get('./assets/response.json')
                .map(r => r['prefix'] + query)
                .concatMap(x => Observable.of(x).delay(Math.random() * 1000));
  }
}






