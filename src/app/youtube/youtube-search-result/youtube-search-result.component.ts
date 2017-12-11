import { YouTubeSearchResult } from './../youtube-search-result';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-search-result',
  templateUrl: './youtube-search-result.component.html',
  styleUrls: ['./youtube-search-result.component.css']
})
export class YoutubeSearchResultComponent implements OnInit {
  @Input() result: YouTubeSearchResult;
  constructor() { }

  ngOnInit() {
  }

}
