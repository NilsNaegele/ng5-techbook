import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
      <p>success message from success-alert</p>
  `,
  styles: [`
      p {
        color: white;
        background-color: green;
      }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
