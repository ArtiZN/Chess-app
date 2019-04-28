import { Injectable } from '@angular/core';

import { WebsocketService } from '@core/services/websocket/websocket.service';
import { User } from '@core/interfaces/user.interfaces';

@Injectable()
export class ChessGameService {

  gameId: any = null;

  constructor(private wsService: WebsocketService) { }

  initGame(user: User) {


    this.wsService.openConnection();

    this.wsService.emitEvent('createGame', user);
    this.wsService.getMessages().subscribe(m => {
      console.log('from server', m);
      this.gameId = m.gameId;
    });

    this.wsService.getMoveMessages().subscribe(move => {
      console.log('moves from server ', move);
    });
  }

  emitEvent(event: string, data: any) {
    this.wsService.emitEvent(event, Object.assign(data, { room: this.gameId }));
  }

  destroyGame() {
    this.wsService.closeConnection();
  }
}
