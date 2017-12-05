import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  template: `
            <button class="btn btn-success" (click)="start()">Start</button> {{ index }}
            <br><hr>
            <button class="btn btn-primary" (click)="pause()">Pause</button>
  `,
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalId;
  index = 0;
  @Output() oddNumber = new EventEmitter<string>();
  @Output() evenNumber = new EventEmitter<string>();

  constructor() { }

  start() {
   this.intervalId = setInterval(() => {
    this.index++;
    this.flash(this.index);
   }, 1000);
  }

  flash(idx) {
    if (idx % 2 === 1) {
      this.oddNumber.emit('odd-' + idx);
    } else {
      this.evenNumber.emit('even-' + idx);
    }
  }

  pause() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
  }

}
