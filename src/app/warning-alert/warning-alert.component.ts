import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
      <p>warning message from warning-alert</p>
  `,
  styles: [`
    p {
      color: white;
      background-color: red;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
