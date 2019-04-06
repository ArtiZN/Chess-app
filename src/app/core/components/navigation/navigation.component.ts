import { Component, OnInit } from '@angular/core';

import { gameMenuItems } from '@core/constants/game-menu.constants';
import { GameSelectionService } from '@core/services/game-selection/game-selection.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menuItems: string[] = gameMenuItems;

  constructor(
    private gameService: GameSelectionService
  ) { }

  ngOnInit() {
  }

  gameMenuSelectHandler(gameType: string) {
    this.gameService.changeGame(gameType);
  }
}
