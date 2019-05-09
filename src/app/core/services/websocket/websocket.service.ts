import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';
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
    if (this.socket) {
      this.socket.close();
    }
  }

  constructor() {}

  emitEvent(event: string, data: any) {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  getMessages: Function = () => {
    if (this.socket) {
      return Observable.create((observer) => {
        this.socket.on('gameCreated', (message: GameConfig) => {
          observer.next(message);
        });
      });
    } else {
      return EMPTY;
    }
  }

  getMoveMessages: Function = () => {
    if (this.socket) {
      return Observable.create((observer) => {
        this.socket.on('moveMade', (move: MoveConfig) => {
          observer.next(move);
        });
      });
    } else {
      return EMPTY;
    }
  }

  closeConnection() { this.disconnect(); }
  openConnection() { this.connect(); }
}
