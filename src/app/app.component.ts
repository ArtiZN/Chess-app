import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { GameSelectionService } from '@core/services/game-selection/game-selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private $gameSubscription: Subscription;

  constructor(
    private gameService: GameSelectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.$gameSubscription = this.gameService.gameSelected.subscribe(game => {
      if (game && game != null) {
        this.router.navigate([game]);
      }
    });
  }

  ngOnDestroy() {
    this.$gameSubscription.unsubscribe();
  }
}
