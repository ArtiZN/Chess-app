import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

// import { ChessMove } from '@core/interfaces/chess-move.interfaces';
import { GameSelectionService } from '@core/services/game-selection/game-selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

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

  private $gameSubscription: Subscription;

  constructor(
    private gameService: GameSelectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.$gameSubscription = this.gameService.gameSelected.subscribe(game => {
      this.router.navigate([game]);
    });
  }

  ngOnDestroy() {
    this.$gameSubscription.unsubscribe();
  }
}
