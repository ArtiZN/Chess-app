import { WebsocketService } from './../websocket/websocket.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages: Subject<any>;

  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService
    .connect()
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  sendMsg(message) {
    this.messages.next(message);
  }
}
