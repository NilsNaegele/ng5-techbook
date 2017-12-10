import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ChatService } from './../chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
  this.users = this.chatService.getUsers();
  }

}
