import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `
      <p>Odd - NUMBER</p>
  `,
  styles: [`
    p {
      color: #fff;
      background-color: green;
    }
  `]
})
export class OddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
