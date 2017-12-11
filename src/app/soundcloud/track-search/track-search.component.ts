import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SoundCloudService } from './../soundcloud.service';


@Component({
  selector: 'app-track-search',
  templateUrl: './track-search.component.html',
  styleUrls: ['./track-search.component.css']
})
export class TrackSearchComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter();

  constructor(private soundCloudService: SoundCloudService) { }

  ngOnInit() { }

  searchTrack(value: string) {
    if (value.length >= 3) {
      console.log('Search track: ', value);
      this.soundCloudService.findTracks(value);
      this.search.emit(value);
    }
  }

}
