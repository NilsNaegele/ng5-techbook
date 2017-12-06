import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  template: `
          <h4 *ngIf="!allowEdit">You're not allowed to edit!</h4>
          <div *ngIf="allowEdit">
          <div class="form-group">
                <label for="name">Server Name</label>
                <input type="text" id="name" class="form-control" [(ngModel)]="serverName">
          </div>
          <div class="form-group">
                <label for="status">Server Status</label>
                <select id="status" class="form-control" [(ngModel)]="serverStatus">
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                </select>
          </div>
          <button class="btn btn-primary" (click)="onUpdateServer()">Update Server</button>
          </div>
  `,
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
