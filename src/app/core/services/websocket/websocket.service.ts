import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environment';

import * as io from 'socket.io-client';

import { GameConfig, MoveConfig } from '@core/interfaces/socketIO.interfaces';

@Injectable()
export class WebsocketService {

  private socket: any;

  private connect() {
    this.socket = new io.connect(environment.ws_uri, environment.socket_config);
  }

  private disconnect() {
    this.socket.close();
  }

  constructor() {}

  emitEvent(event: string, data: any) {
    this.socket.emit(event, data);
  }

  getMessages: Function = () => {
    return Observable.create((observer) => {
      this.socket.on('gameCreated', (message: GameConfig) => {
        observer.next(message);
      });
    });
  }

  getMoveMessages: Function = () => {
    return Observable.create((observer) => {
      this.socket.on('moveMade', (move: MoveConfig) => {
        observer.next(move);
      });
    });
  }

  closeConnection() { this.disconnect(); }
  openConnection() { this.connect(); }
}
