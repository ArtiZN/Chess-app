import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FindGameDialogComponent } from '@core/material-dialogs/find-game-dialog/find-game-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-find-game',
  templateUrl: './find-game.component.html',
  styleUrls: ['./find-game.component.css']
})
export class FindGameComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  findGameHandler() {
    console.log('find game');
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(FindGameDialogComponent, {
      width: '250px'
    });
  }
}
