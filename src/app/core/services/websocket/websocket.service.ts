import { Injectable } from '@angular/core';
import { Subject, Observable, Subscriber } from 'rxjs';
import { environment } from '@environment';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket;

  constructor() { }

  connect(): Subject<MessageEvent> {
    this.socket = new io.connect(environment.ws_uri, {
      'reconnection': true,
      'reconnectionDelay': 1000,
      'reconnectionDelayMax' : 5000,
      'reconnectionAttempts': 5
    });

    this.socket.on('connect_error', function(err) {
      console.log(err);
    });

    this.socket.on('disconnect', function () {
      console.log('disconnect');
    });

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
