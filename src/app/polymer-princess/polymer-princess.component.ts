import { Component } from '@angular/core';

@Component({
  selector: 'app-polymer-princess',
  template: `
          <img [src]="imgURL">
          <i>{{carmen}}</i>
  `,
  styles: [`
        img {
          border-radius: 100%;
          width: 500px;
        }
  `]
})
export class PolymerPrincessComponent {
  imgURL = './assets/carmen1.jpg';
  carmen = 'My Polymer Princess';
  index = 0;

  constructor() {
    this.rotate();
  }


  rotate() {
      setInterval(() => {
        this.index++;
        this.changeImage(this.index);
      }, 2000);
  }

changeImage(idx) {
  if (idx === 10) { idx = 1; this.index = 1; }
  this.imgURL = `./assets/carmen${idx}.jpg`;
}

}


