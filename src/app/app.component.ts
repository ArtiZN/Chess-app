import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { GameSelectionService } from '@core/services/game-selection/game-selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

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
