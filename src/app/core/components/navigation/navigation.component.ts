import { Component, OnInit } from '@angular/core';

import { gameMenuItems } from '@core/constants/game-menu.constants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menuItems: string[] = gameMenuItems;

  constructor() { }

  ngOnInit() {
  }

  gameMenuSelectHandler(gameType: string) {
    console.log(gameType);
  }
}
