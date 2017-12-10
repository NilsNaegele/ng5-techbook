import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { TweetHttpService } from './tweet-http.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public tweetHttpService: TweetHttpService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.tweetHttpService.getToken()}`
            }
          });
          return next.handle(request);
  }

}
