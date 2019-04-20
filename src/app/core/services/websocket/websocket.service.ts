import { Injectable } from '@angular/core';
import { Subject, Observable, Subscriber } from 'rxjs';
import { environment } from '@environment';

import * as io from 'socket.io-client';
import { SocketEvents } from '@core/enums/socket-events.enums';

@Injectable()
export class WebsocketService {

  private socket: any;

  private connect() {
    this.socket = new io.connect(environment.ws_uri, environment.socket_config);
  }

  constructor() {
    this.connect();
  }

  emitEvent(event: string, data: any) {
    this.socket.emit(event, data);
  }

  getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('gameCreated', (message) => {
            observer.next(message);
        });
    });
  }
}
