import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `
      <p>Even - NUMBER</p>
  `,
  styles: [`
    p {
      color: #fff;
      background-color: red;
    }
  `]
})
export class EvenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
