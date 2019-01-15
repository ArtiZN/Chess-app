import { Component } from '@angular/core';

import * as _ from 'lodash';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';
import { toColor } from '@core/utils/chess.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: ChessMove[] = [{
    N: 1,
    white: undefined,
    black: undefined
  }];

  cgMove($event) {
    const move = _.last($event.history());
    const color = ($event.turn() === 'w') ? 'black' : 'white';
    this.updateData(move, color);
  }

  updateData(move, color) {
    const last: ChessMove = this.data[this.data.length - 1];
    if (last[color] !== undefined) {
      const d = {
        N: last.N + 1,
        white: undefined,
        black: undefined
      };
      d[color] = move;
      this.data = [...this.data, d];
    } else {
      last[color] = move;
    }
  }
}
