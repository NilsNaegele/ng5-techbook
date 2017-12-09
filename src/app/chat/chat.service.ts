import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { ChatMessage } from './models/chat-message.model';

@Injectable()
export class ChatService {
  user: firebase.User;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
            this.afAuth.authState.subscribe(auth => {
                    if (auth !== undefined && auth !== null) {
                      this.user = auth;
                      console.log('AUTH: ' + auth);
                    }

                    this.getUser().subscribe(a => {
                      this.userName = a.displayName;
                    });
            });
   }

   getUser(): FirebaseObjectObservable<any> {
     const userId = this.user.uid;
     const path = `/users/${userId}`;
     return this.db.object(path);
   }

   getUsers(): FirebaseListObservable<any[]> {
     const path = '/users';
     return this.db.list(path);
   }

   sendMessage(msg: string): void {
     const timeStamp = this.getTimeStamp();
     const email = this.user.email;
     this.chatMessages = this.getMessages();
     this.chatMessages.push({
       message: msg,
       timeSend: timeStamp,
       userName: this.userName,
       email: email
     });
    console.log('Send Message called');
   }

   getMessages(): FirebaseListObservable<ChatMessage[]> {
    return this.db.list('messages', {
      query: {
        limitToLast: 25,
        orderByKey: true
      }
    });
   }

   getTimeStamp(): string {
     const now = new Date();
     const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
     const time = `${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;
    return (`${date} ${time}`);
   }
}
