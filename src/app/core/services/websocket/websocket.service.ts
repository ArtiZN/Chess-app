import { Injectable } from '@angular/core';
import { Subject, Observable, Subscriber } from 'rxjs';
import { environment } from '@environment';

import * as io from 'socket.io-client';
import { SocketEvents } from '@core/enums/socket-events.enums';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket;

  constructor() { }

  connect(): Subject<MessageEvent> {
    this.socket = new io.connect(environment.ws_uri, environment.socket_config);

    this.socket.on(SocketEvents.CONNECT_ERROR, function(err) {
      console.log(err);
    });

    this.socket.on(SocketEvents.DISCONNECT, function () {
      console.log('disconnect');
    });

    this.socket.on(SocketEvents.CONNECT, function() {
      console.log('connect');
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
