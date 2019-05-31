import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { CheakersGameService } from '@core/services/cheakers-game/cheakers-game.service';

@Component({
  selector: 'app-cheakers-game',
  templateUrl: './cheakers-game.component.html',
  styleUrls: ['./cheakers-game.component.scss']
})
export class CheakersGameComponent implements OnInit {

  isWinner = false;
  winner: string = null;
  isWinner$: Observable<string>;
  _resetGame: BehaviorSubject<boolean>;

  constructor(
    private service: CheakersGameService
  ) { }

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
