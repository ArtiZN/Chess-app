import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.css']
})
export class ChessGameComponent implements OnInit {

  data: ChessMove[] = [{ N: 1 }];

  constructor() { }

  ngOnInit() {
  }

  cgMove($event) {
    const move = _.last($event.history());
    const color = ($event.turn() === 'w') ? 'black' : 'white';
    this.updateData(move, color);
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
