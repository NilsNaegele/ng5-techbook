import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-polymer-princess',
  template: `
          <img [src]="imgURL"><br>
          <i>{{quote}}</i>
  `,
  styles: [`
        img {
          border-radius: 100%;
          width: 500px;
          height: 400px;
        }
  `]
})
export class PolymerPrincessComponent implements OnInit {
  @Input() type: string;
  imgURL = '';
  quote = '';
  index = 0;

  constructor() { }

  ngOnInit() {
    if (this.type === 'book') {
      this.imgURL = './assets/book1.png';
      this.quote = 'My Angular Books';
    } else {
      this.imgURL = './assets/images/technology1.jpg';
      this.quote = 'My Technologies';
    }

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
  if (this.type === 'book') {
  this.imgURL = `./assets/book${idx}.png`;
  } else {
    this.imgURL = `./assets/images/technology${idx}.jpg`;
  }
}

}


