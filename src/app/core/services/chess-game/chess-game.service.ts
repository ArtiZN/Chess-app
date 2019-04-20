import { Injectable } from '@angular/core';

import { WebsocketService } from '@core/services/websocket/websocket.service';
import { User } from '@core/interfaces/user.interfaces';

@Injectable()
export class ChessGameService {

  constructor(private wsService: WebsocketService) { }

  initGame(user: User) {
    this.wsService.emitEvent('createGame', user);
    this.wsService.getMessages().subscribe(m => {
      console.log('from server', m);
    });
  }
}
