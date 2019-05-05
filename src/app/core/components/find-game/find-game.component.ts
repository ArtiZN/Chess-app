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
    const dialogRef = this.dialog.open(FindGameDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
