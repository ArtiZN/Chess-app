import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MoveConfig, GameConfig } from '@core/interfaces/socketIO.interfaces';
import { WebsocketService } from '@core/services/websocket/websocket.service';
import { UserService } from '@core/mock-backend/services/user.service';

@Injectable()
export class ChessGameService {

  private _gameId: string = null;
  private _gameMode: string = null;

  get moves(): Observable<MoveConfig> {
    return this.wsService.getMoveMessages();
  }

  get messages(): Observable<GameConfig> {
    return this.wsService.getMessages();
  }

  set gameId(id) {
    this._gameId = id;
  }

  get gameMode(): string {
    return this._gameMode;
  }

  set gameMode(mode: string) {
    this._gameMode = mode;
  }

  constructor(
    private wsService: WebsocketService,
    private userService: UserService) { }

  initSocket() {
    this.wsService.openConnection();
    this.wsService.emitEvent('createGame', this.userService.getUser());
  }

  emitEvent(event: string, data: any) {
    this.wsService.emitEvent(event, Object.assign(data, { room: this._gameId }));
  }

  destroySocket() {
    this.wsService.closeConnection();
  }
}
