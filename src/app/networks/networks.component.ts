import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-networks',
  template: `
          <input type="text" [(ngModel)]="filteredStatus">
          <br>
          <button class="btn btn-primary"
          (click)="onAddServer()">Add Server</button>
          <br><br>
          <h2>App Status: {{ appStatus | async }}</h2>
          <hr>
          <ul class="list-group">
            <li class="list-group-item"
            *ngFor="let server of servers | appFilter:filteredStatus:'status' | appSort:'name'"
            [ngClass]="getStatusClasses(server)">
                <span class="badge">{{ server.status }}</span>
                <strong>{{ server.name | appShorten:20 }}</strong> |
                {{ server.instanceType | appReverse }} |
                {{ server.started | date: 'fullDate' | uppercase }}
            </li>
          </ul>
  `,
  styleUrls: ['./networks.component.css']
})
export class NetworksComponent implements OnInit {

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('stable');
    }, 2000);
  });

  servers = [

      {
        instanceType: 'medium',
        name: 'Production Server',
        status: 'stable',
        started: new Date(2017, 11, 15)
      },
      {
        instanceType: 'large',
        name: 'User Database',
        status: 'stable',
        started: new Date(2017, 11, 15)
      },
      {
        instanceType: 'small',
        name: 'Development Server',
        status: 'offline',
        started: new Date(2017, 11, 15)
      },
      {
        instanceType: 'small',
        name: 'Testing Environment Server',
        status: 'stable',
        started: new Date(2017, 11, 15)
      }
  ];

  filteredStatus = '';

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
            return {
                'list-group-item-success': server.status === 'stable',
                'list-group-item-warning': server.status === 'offline',
                'list-group-item-danger': server.status === 'critical'
            };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(2017, 11, 15)
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
