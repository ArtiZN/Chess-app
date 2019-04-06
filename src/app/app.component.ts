import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

// import { ChessMove } from '@core/interfaces/chess-move.interfaces';
import { CheakersGameService } from '@core/services/cheakers-game/cheakers-game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /* data: ChessMove[] = [{
    N: 1
  }];

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
  } */

  isWinner = false;
  winner: string = null;
  isWinner$: Observable<string>;
  _resetGame: BehaviorSubject<boolean>;

  constructor(
    private service: CheakersGameService
  ) {}

  ngOnInit() {
    this.isWinner$ = this.service.isWinnerObs;
    this.isWinner$.subscribe(w => {
      if (w !== 'none') {
        this.isWinner = true;
        this.winner = w;
      } else {
        this.isWinner = false;
        this.winner = 'none';
        }
      });
    this._resetGame = this.service.resetGameBeh;
  }

  onReset() {
    this._resetGame.next(true);
  }
}
