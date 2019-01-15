import { Component, Input } from '@angular/core';

import * as _ from 'lodash';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input()
  data: ChessMove[] = [];

  cgMove($event) {
    const move = _.last($event.pgn().split(' '));
  }
}
