import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// import { Color } from 'chessground/types';

import { Mode, ModeListItem } from '@core/interfaces/game.interafces';
import { GameConfig } from '@core/interfaces/socketIO.interfaces';
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

  ngOnInit() {
  }

  playHandler(): void {
    this.showSpinner = true;
    this.chessService.mode = this.modeSelected;
    if (this.modeSelected === 'bot') {
      this.dialogRef.close();
      this.router.navigate(['/chess']);
    } else {
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
      }, 1000);
    }
  }

  calcelHandler(): void {
    this.showSpinner = false;
    this.dialogRef.close();
  }
}
