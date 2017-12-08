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
          height: 400px;
        }
  `]
})
export class PolymerPrincessComponent {
  imgURL = './assets/book1.png';
  carmen = 'My Angular Books';
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
  this.imgURL = `./assets/book${idx}.png`;
}

}


