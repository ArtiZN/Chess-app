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
    N: 1
  }];

  cgMove($event) {
    const move = _.last($event.history());
    const color = toColor($event);
  }

  updateData(move, color) {
    // let last = _.last(this.data);
    // if (!last) {
    //   if (last.hasOwnProperty(''))
    // } else {
    //   this.data.push({
    //     N: 1,
    //     white: move,
    //     black: ''
    //   });
    // }
  }
}
