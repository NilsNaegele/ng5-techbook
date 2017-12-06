import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-inactive-users',
  template: `
          <h1>Inactive Users</h1>
            <ul class="list-group">
            <li class="list-group-item" *ngFor="let user of users">
              {{ user.name }} | <a (click)="activate(user)">Set to active</a>
            </li>
            </ul>
            <p>Inactive users count: {{ users.length }}</p>
  `,
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: { name: string, status: string }[];

  constructor(private usersService: UsersService) { }

  activate(user) {
    this.usersService.activate(user);
  }

  ngOnInit() {
  }

}
