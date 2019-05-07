import { GameConfig } from '@core/interfaces/socketIO.interfaces';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ChessGameService } from '@core/services/chess-game/chess-game.service'

@Component({
  selector: 'app-find-game-dialog',
  templateUrl: './find-game-dialog.component.html',
  styleUrls: ['./find-game-dialog.component.css']
})
export class FindGameDialogComponent implements OnInit {

  private gameSubscription: Subscription;

  ori: string;

  showSpinner = false;
  modeSelected = 'bot';
  modes = [{
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
    this.chessService.gameMode = this.modeSelected;
    if (this.modeSelected === 'bot') {
      this.dialogRef.close();
      this.router.navigate(['/chess']);
    } else {
      this.chessService.initSocket();
      this.gameSubscription = this.chessService.messages.subscribe((message: GameConfig) => {
        console.log('Create game', message);
        this.chessService.ori = message.color;
        this.chessService.gameId = message.gameId;
        this.ori = message.color;
      });
      const interval = setInterval(() => {
        console.log(this.chessService.gameId);
        if (this.chessService.gameId) {
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
