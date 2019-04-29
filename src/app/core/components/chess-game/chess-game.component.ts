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
    this.chessService.moves.subscribe(move => {
      console.log('moves from server ', move);
    });
  }

  ngOnDestroy() {
    this.chessService.destroyGame();
  }

  cgMove($event) {
    /* const move = _.last($event.history());
    const color = ($event.turn() === 'w') ? 'black' : 'white';
    this.updateData(move, color); */
    this.updateData($event);

    this.chessService.emitEvent('makeMove', $event);
  }

  updateData({ to, turn }) {
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
