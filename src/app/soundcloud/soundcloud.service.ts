import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SoundCloudService {
  soundCloud: any;
  private player: any;
  private tracks: any[];
  private genres: any[];

  playerPause: EventEmitter<boolean> = new EventEmitter();



  constructor(private http: Http) {
    this.soundCloud = SC;
    this.soundCloud.initialize({
      client_id: environment.soundcloud_client_id
    });
   }

   findTracks(value: string): void {
     this.soundCloud.get('/tracks', { q: value, limit: 10 })
                    .then(tracks => this.setTracks(tracks));
   }

   getTopTracks(limit: number): Observable<any[]> {
     return Observable.fromPromise(
       this.soundCloud.get('/tracks', { genre: 'soundcloud', kind: 'top', limit: limit })
     ).map((res: any) => {
       this.setTracks(res);
       return this.tracks;
     });
   }

   private setTracks(tracks: any[]) {
     this.tracks = tracks;
     if (this.tracks) {
       this.tracks.forEach(element => {
         if (element.artwork_url) {
           element.artwork_url = element.artwork_url.replace('-large', '-t67x67');
           element.title = element.title.substring(0, 40);
         } else {
           element.artwork_url = '../../assets/images/dance.png';
         }
       });
     }
     return this.tracks;
   }

   getTracks(): any[] {
     return this.tracks;
   }

   play(trackNumber: number): void {
     this.soundCloud.stream(`/tracks/${trackNumber}`)
                    .then(player => {
                      this.player = player;

                      if (this.player) {
                        this.player.play();

                        console.log('playing ...');

                        this.player.on('finish', () => {
                          console.log('player finish');
                          this.playerPause.emit(true);
                        });
                      }

                    });
   }

   pause(): void {
     if (this.player) {
       this.player.pause();
     }
   }

}
