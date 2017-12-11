import { Component, OnInit } from '@angular/core';
import { SoundCloudService } from '../soundcloud.service';

@Component({
  selector: 'app-track-container',
  templateUrl: './track-container.component.html',
  styleUrls: ['./track-container.component.css']
})
export class TrackContainerComponent implements OnInit {

  search = '';

  constructor(private soundCloudService: SoundCloudService) { }

  onSearch(value: string) {
    this.search = value;
  }

  play() {
    this.soundCloudService.play(293);
  }

  ngOnInit() {
  }



}
