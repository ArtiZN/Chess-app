import { Injectable } from '@angular/core';
import { Subject, Observable, Subscriber } from 'rxjs';
import { environment } from '@environment/environment';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket;

  constructor() { }

  connect(): Subject<MessageEvent> {
    this.socket = io(environment.ws_uri);

    const observable = new Observable((subscriber: Subscriber<{}>) => {
      this.socket.on('message', (data) => {
        console.log('Received message from Websocket Server');
        subscriber.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    const observer = {
        next: (data: Object) => {
            this.socket.emit('message', JSON.stringify(data));
        },
    };

    return Subject.create(observer, observable);
  }
}
