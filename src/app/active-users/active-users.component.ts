import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  template: `
            <h1>Active Users</h1>
            <ul class="list-group">
            <li class="list-group-item" *ngFor="let user of users">
            {{ user.name }} | <a (click)="inactivate(user)">Set to inactive</a>
            </li>
            </ul>
            <p>Active users count: {{ users.length }}</p>
  `,
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: { name: string, status: string }[];

  constructor(private usersService: UsersService) { }

  inactivate(user) {
    this.usersService.inActivate(user);
  }

  ngOnInit() {
  }

}
