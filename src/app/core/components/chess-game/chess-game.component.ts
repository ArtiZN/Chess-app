import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';
import { ChessGameService } from '@core/services/chess-game/chess-game.service';
import { UserService } from '@core/mock-backend/services/user.service';
import { User } from '@core/interfaces/user.interfaces';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.css']
})
export class ChessGameComponent implements OnInit, OnDestroy {

  data: ChessMove[] = [{ N: 1 }];

  constructor(
    private chessService: ChessGameService,
    private userService: UserService) { }

  ngOnInit() {
    const user: User = this.userService.getUser();
    this.chessService.initGame(user);
  }

  ngOnDestroy() {
    this.chessService.destroyGame();
  }

  cgMove($event) {
    const move = _.last($event.history());
    const color = ($event.turn() === 'w') ? 'black' : 'white';
    this.updateData(move, color);
    // console.log($event.turn(), $event.history());
    this.chessService.emitEvent('makeMove', { color, move });
  }

  updateData(move, color) {
    const last: ChessMove = _.last(this.data);
    if (last[color] !== undefined) {
      const row = {} as ChessMove;
      row.N = last.N + 1;
      row[color] = move;
      this.data = [...this.data, row];
    } else {
      last[color] = move;
    }
  }
}
