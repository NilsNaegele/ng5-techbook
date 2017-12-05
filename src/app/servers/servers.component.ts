import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
        <label>Server Name</label>
        <input type="text" class="form-control" [(ngModel)]="serverName">
        <button [disabled]="!allowNewServer" (click)="onCreateServer()"
                class="btn btn-primary">Add Server</button>
        <p *ngIf="serverCreated">
        Server was created, server name is {{ serverName }}
        </p>
        <app-server *ngFor="let server of servers"></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 1'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }


  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

}
