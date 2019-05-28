import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-successfull-games',
  templateUrl: './most-successfull-games.component.html',
  styleUrls: ['./most-successfull-games.component.css']
})
export class MostSuccessfullGamesComponent implements OnInit {

  games = [{
    src: './assets/images/games/ruy-lopez.png',
    title: '1) Ruy Lopez opening - white'
  }, {
    src: './assets/images/games/scotch-game.png',
    title: '2) Scotch-game - white'
  }, {
    src: './assets/images/games/grunfeld-defence.png',
    title: '3) Grunfeld defence - black'
  }];

  constructor() { }

  ngOnInit() {
  }

}
