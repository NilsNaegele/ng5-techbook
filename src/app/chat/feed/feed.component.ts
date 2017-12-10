import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ChatMessage } from './../models/chat-message.model';
import { ChatService } from './../chat.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed: FirebaseListObservable<ChatMessage[]>;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    console.log('OnInit FeedComponent');
    this.feed = this.chatService.getMessages();
  }

}
