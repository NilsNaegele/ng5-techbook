import { Component, OnInit } from '@angular/core';
import { YouTubeSearchResult } from '../youtube-search-result';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {
  results: YouTubeSearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: YouTubeSearchResult[]): void {
    this.results = results;
  }

}
