import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { gameMenuItems } from '@core/constants/game-menu.constants';

@Injectable()
export class GameSelectionService {
  private $gameSelected = new BehaviorSubject(null);
  gameSelected = this.$gameSelected.asObservable();

  constructor() { }

  changeGame(game: string) {
    if (!gameMenuItems.includes(game)) {
      throw new Error('Unsupported game provided!');
    }

    this.$gameSelected.next(game);
  }
}
