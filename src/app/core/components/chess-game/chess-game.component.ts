import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Key } from 'chessground/types';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';
import { MoveConfig } from '@core/interfaces/socketIO.interfaces';
import { ChessGameService } from '@core/services/chess-game/chess-game.service';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.css']
})
export class ChessGameComponent implements OnInit {

  gameMode: string = null;
  data: ChessMove[] = [{ N: 1 }];

  constructor(
    private chessService: ChessGameService) { }

  ngOnInit() {
    this.gameMode = this.chessService.mode;
  }

  cgMove($event: MoveConfig) {
    this.updateData($event);
    if (this.gameMode === 'live') {
      this.chessService.emitEvent('makeMove', Object.assign($event, { room: this.chessService.gameID }));
    }
  }

  updateData({ to, turn }: { to: Key, turn: string }) {
    const last: ChessMove = _.last(this.data);
    const color = turn === 'w' ? 'black' : 'white';
    if (last[color] !== undefined) {
      const row = {} as ChessMove;
      row.N = last.N + 1;
      row[color] = to;
      this.data = [...this.data, row];
    } else {
      last[color] = to;
    }
  }
}
