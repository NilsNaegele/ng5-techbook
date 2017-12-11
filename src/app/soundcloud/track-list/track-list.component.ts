import { Component, OnInit, Input } from '@angular/core';
import { SoundCloudService } from './../soundcloud.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
    @Input()
    set refresh(value: string) {
      this.search = value;

      if (value && value.length > 2) {
        this.tracks = this.soundCloudService.getTracks();
      } else {
        this.tracks = [];
      }

    }

    tracks: any[] = [];
    search = '';
    private currentTrackId = 0;


  constructor(private soundCloudService: SoundCloudService) { }

  ngOnInit() {
    this.soundCloudService.getTopTracks(10).subscribe((res: any) => {
      this.tracks = res;
    });
  }

  setCurrentTrack(trackId: number): void {
    this.currentTrackId = trackId;
  }

  pause(trackId: number): boolean {
    return this.currentTrackId === trackId;
  }

}
