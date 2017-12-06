import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServersService } from './servers.service';


@Component({
  selector: 'app-servers',
  template: `
              <div class="row">
                  <div class="col-xs-12 col-sm-4">
                      <div class="list-group">
                          <a
                            *ngFor="let server of servers"
                             [routerLink]="['/servers', server.id]"
                             [queryParams]="{allowEdit: server.id === 3 ? '1' : '0'}"
                             [fragment]="loading"
                             href="#"
                             class="list-group-item">
                              {{ server.name }}
                          </a>
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                  <router-outlet></router-outlet>
                      <!--<button class="btn btn-primary" (click)="onReload()">Reload Page</button>
                      <app-edit-server></app-edit-server>
                      <hr>
                      <app-server-one></app-server-one>-->
                  </div>
              </div>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: Array<{id: number, name: string, status: string}> = [];

  constructor(private serversService: ServersService,
              private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['/servers'], {relativeTo: this.route});
  }


}
