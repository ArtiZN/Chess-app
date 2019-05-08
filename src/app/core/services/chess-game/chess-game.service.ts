import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'chessground/types';

import { MoveConfig, GameConfig } from '@core/interfaces/socketIO.interfaces';
import { GameID, Mode } from '@core/interfaces/game.interafces';
import { WebsocketService } from '@core/services/websocket/websocket.service';
import { UserService } from '@core/mock-backend/services/user.service';

@Injectable()
export class ChessGameService {

  private _gameID: GameID = null;
  private _mode: Mode = null;
  private _orientation: Color = null;

  get $moves(): Observable<MoveConfig> { return this.wsService.getMoveMessages(); }
  get $messages(): Observable<GameConfig> { return this.wsService.getMessages(); }

  get gameID(): GameID { return this._gameID; }
  set gameID(id: GameID) { this._gameID = id; }

  get mode(): Mode { return this._mode; }
  set mode(mode: Mode) { this._mode = mode; }

  get orientation(): Color { return this._orientation; }
  set orientation(orien: Color) { this._orientation = orien; }

  constructor(
    private wsService: WebsocketService,
    private userService: UserService) { }

  initSocket() {
    this.wsService.openConnection();
    this.wsService.emitEvent('createGame', this.userService.getUser());
  }

  emitEvent(event: string, data: any) {
    this.wsService.emitEvent(event, Object.assign(data, { room: this._gameID }));
  }

  destroySocket() {
    this._gameID = null;
    this._mode = null;
    this._orientation = null;
    this.wsService.closeConnection();
  }
}
