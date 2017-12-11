import { Component, OnInit, Input } from '@angular/core';
import { SoundCloudService } from './../soundcloud.service';

@Component({
  selector: 'app-track-button',
  templateUrl: './track-button.component.html',
  styleUrls: ['./track-button.component.css']
})
export class TrackButtonComponent implements OnInit {
  @Input() isPlaying= false;
  @Input() trackId = 0;
  @Input() trackArtworkUrl = '';

  constructor(private soundCloudService: SoundCloudService) { }

  ngOnInit() {
    this.soundCloudService.playerPause.subscribe(p => {
      this.isPlaying = false;
    });
  }

  togglePlay() {
    if (this.isPlaying) {
      this.soundCloudService.pause();
    } else {
      if (this.trackId) {
        this.soundCloudService.play(this.trackId);
      }
    }
      this.isPlaying = !this.isPlaying;
      return false;
  }

}
