import { Injectable } from '@angular/core';

import { WebsocketService } from '@core/services/websocket/websocket.service';

@Injectable()
export class ChessGameService {

  constructor(private wsService: WebsocketService) { }

  initGame(){
    console.log('init game');

    this.wsService.emitEvent('createGame', 'dsdsdsdsdsd');

    this.wsService.getMessages().subscribe(m => {
      console.log('from server', m);
    });
  }
}
