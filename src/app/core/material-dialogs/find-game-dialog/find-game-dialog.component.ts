import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Mode, ModeListItem, GameModes } from '@core/interfaces/game.interafces';
import { GameConfig } from '@core/interfaces/socketIO.interfaces';
import { findGameTimeout } from '@core/constants/timeout.constants';
import { ChessGameService } from '@core/services/chess-game/chess-game.service';

@Component({
  selector: 'app-find-game-dialog',
  templateUrl: './find-game-dialog.component.html',
  styleUrls: ['./find-game-dialog.component.css']
})
export class FindGameDialogComponent implements OnInit {

  private gameSubscription: Subscription;

  showSpinner = false;
  modeSelected: Mode = 'bot';
  modes: ModeListItem[] = [{
    title: 'Play with the machine',
    mode: 'bot'
  }, {
    title: 'Play with people',
    mode: 'live'
  }];

  constructor(
    private router: Router,
    private chessService: ChessGameService,
    private dialogRef: MatDialogRef<FindGameDialogComponent>
  ) {}

  ngOnInit() {}

  playHandler(): void {
    this.showSpinner = true;
    this.chessService.mode = this.modeSelected;

    switch (this.modeSelected) {
      case GameModes.BOT: {
        this.dialogRef.close();
        this.router.navigate(['/chess']);
        break;
      }
      case GameModes.LIVE: {
        this.chessService.initSocket();
        this.gameSubscription = this.chessService.$messages.subscribe((config: GameConfig) => {
          console.log('Create game', config);
          this.chessService.orientation = config.orientation;
          this.chessService.gameID = config.gameID;
        });
        const interval = setInterval(() => {
          if (this.chessService.gameID) {
            clearInterval(interval);
            this.gameSubscription.unsubscribe();
            this.dialogRef.close();
            this.router.navigate(['/chess']);
          }
        }, findGameTimeout);
        break;
      }
      default:
        throw new Error('Error while setting game mode.');
    }
  }

  calcelHandler(): void {
    this.showSpinner = false;
    this.dialogRef.close();
  }
}
