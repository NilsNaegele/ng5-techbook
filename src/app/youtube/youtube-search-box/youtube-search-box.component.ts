import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

import { YouTubeSearchResult } from '../youtube-search-result';
import { YouTubeSearchService } from '../youtube-search.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switch';

@Component({
  selector: 'app-youtube-search-box',
  template: `
          <div class="input-group input-group-lg">
          <span class="input-group-addon" id="sizing-addon1">
          <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
          </span>
          <input type="text" placeholder="Try typing 'Angular'"
          autofocus class="form-control"
          aria-describedby="sizing-addon1">
        </div>
  `,
  styleUrls: ['./youtube-search-box.component.css']
})
export class YouTubeSearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<YouTubeSearchResult[]>= new EventEmitter<YouTubeSearchResult[]>();

  constructor(private youTubeSearchService: YouTubeSearchService,
              private el: ElementRef) {}

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e: any) => e.target.value)
    .filter((text: string) => text.length > 1)
    .debounceTime(200)
    .do(() => this.loading.emit(true))
    .map((query: string) => this.youTubeSearchService.search(query))
    .switch()
    .subscribe(
      (results: YouTubeSearchResult[]) => {
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    );
  }

}
