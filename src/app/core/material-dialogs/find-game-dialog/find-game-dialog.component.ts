import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { ChessGameService } from '@core/services/chess-game/chess-game.service'

@Component({
  selector: 'app-find-game-dialog',
  templateUrl: './find-game-dialog.component.html',
  styleUrls: ['./find-game-dialog.component.css']
})
export class FindGameDialogComponent implements OnInit {

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
    this.dialogRef.close();
    this.chessService.gameMode = this.modeSelected;
    if (this.modeSelected === 'bot') {
      this.router.navigate(['/chess']);
    } else {
      this.router.navigate(['/chess']);

    }
  }

  calcelHandler(): void {
    this.showSpinner = false;
    this.dialogRef.close();
  }
}
