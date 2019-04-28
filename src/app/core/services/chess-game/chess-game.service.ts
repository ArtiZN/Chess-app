import { Injectable } from '@angular/core';

import { WebsocketService } from '@core/services/websocket/websocket.service';
import { User } from '@core/interfaces/user.interfaces';

@Injectable()
export class ChessGameService {

  constructor(private wsService: WebsocketService) { }

  initGame(user: User) {
    this.wsService.openConnection();

    this.wsService.emitEvent('createGame', user);
    this.wsService.getMessages().subscribe(m => {
      console.log('from server', m);
    });
  }

  emitEvent(event: string, data: any) {
    this.wsService.emitEvent(event, data);
  }

  destroyGame() {
    this.wsService.closeConnection();
  }
}
