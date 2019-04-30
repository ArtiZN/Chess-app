import { Injectable } from '@angular/core';

import { WebsocketService } from '@core/services/websocket/websocket.service';
import { User } from '@core/interfaces/user.interfaces';
import { UserService } from '@core/mock-backend/services/user.service';

@Injectable()
export class ChessGameService {

  gameId: any = null;

  constructor(
    private wsService: WebsocketService,
    private userService: UserService) { }

  initSocket() {
    this.wsService.openConnection();

    this.wsService.emitEvent('createGame', this.userService.getUser());
  }

  get moves() {
    return this.wsService.getMoveMessages();
  }

  get messages() {
    return this.wsService.getMessages();
  }

  set gameID(id) {
    this.gameId = id;
  }

  emitEvent(event: string, data: any) {
    this.wsService.emitEvent(event, Object.assign(data, { room: this.gameId }));
  }

  destroySocket() {
    this.wsService.closeConnection();
  }
}
