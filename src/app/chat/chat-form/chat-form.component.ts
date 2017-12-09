import { Component, OnInit } from '@angular/core';
import { ChatService } from './../chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  message: string;

  constructor(private chatService: ChatService) { }

  send() {
    if (this.message && this.message.length > 5) {
        this.chatService.sendMessage(this.message);
        this.message = '';
    }
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

  ngOnInit() {
  }

}
