import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersObservableService } from './../../usersObservable.service';

@Component({
  selector: 'app-user',
  template: `
        <p>User with <strong>ID {{ id }}</strong> was loaded</p>
        <button class="btn btn-primary" (click)="onActivate()">Activate</button>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit  {
  id: number;

  constructor(private route: ActivatedRoute, private usersService: UsersObservableService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }

  onActivate() {
    this.usersService.usersActivated.next(this.id);
  }


}
