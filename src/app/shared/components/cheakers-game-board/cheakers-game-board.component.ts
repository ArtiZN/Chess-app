import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CheakersGameService } from '@core/services/cheakers-game/cheakers-game.service';

@Component({
  selector: 'app-cheakers-game-board',
  templateUrl: './cheakers-game-board.component.html',
  styleUrls: ['./cheakers-game-board.component.scss']
})
export class CheakersGameBoardComponent implements OnInit {

  board: any;

  public resetGame$: Observable<boolean>;

  constructor(
    private service: CheakersGameService
  ) {}

  ngOnInit() {
    this.resetGame$ = this.service.resetGameObs;
    this.resetGame$.subscribe(reset => {
      if (reset) {
          this.onReset();
      }
    });
    this.onReset();
  }

  onReset() {
    this.service.resetGame();
    this.board = this.service.board;
  }
}
