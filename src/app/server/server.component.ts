import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  template: `
        <p [ngStyle]="{backgroundColor: getColor()}"
            [ngClass]="{online: serverStatus === 'online'}">
          {{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}
        </p>
  `,
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';

    constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getServerStatus() {
      return this.serverStatus;
    }

}

