import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
          <div class="row">
              <div class="col-xs-12 col-sm-4">
                  <div class="list-group">
                    <a [routerLink]="['/users', user.id, user.name]"
                        href="#" class="list-group-item" *ngFor="let user of users">
                        {{ user.name }}
                    </a>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                  <!--<app-user></app-user>-->
                  <router-outlet></router-outlet>
              </div>
          </div>
  `,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
      {
        id: 1,
        name: 'Nils'
      },
      {
        id: 2,
        name: 'Carmen'
      },
      {
        id: 3,
        name: 'Chris'
      }

  ];

  constructor() { }

  ngOnInit() {
  }

}
