import { Component, OnInit } from '@angular/core';

import { gameMenuItems } from '@core/constants/game-menu.constants';
import { GameSelectionService } from '@core/services/game-selection/game-selection.service';
import { AuthenticationService } from '@core/mock-backend/services/auth.service';
import { UserService } from '@core/mock-backend/services/user.service';
import { User } from '@core/interfaces/user.interfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menuItems: string[] = gameMenuItems;
  user: User = null;

  constructor(
    private gameService: GameSelectionService,
    private authService: AuthenticationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  gameMenuSelectHandler(gameType: string) {
    this.gameService.changeGame(gameType);
  }

  logoutHandler() {
    this.authService.logout();
  }
}
