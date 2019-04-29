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

  initGame() {
    this.wsService.openConnection();

    this.wsService.emitEvent('createGame', this.userService.getUser());
    this.wsService.getMessages().subscribe(m => {
      console.log('from server', m);
      this.gameId = m.gameId;
    });
  }

  get moves() {
    return this.wsService.getMoveMessages();
  }

  emitEvent(event: string, data: any) {
    this.wsService.emitEvent(event, Object.assign(data, { room: this.gameId }));
  }

  destroyGame() {
    this.wsService.closeConnection();
  }
}
