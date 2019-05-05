import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

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
    public dialogRef: MatDialogRef<FindGameDialogComponent>
  ) {}

  ngOnInit() {
  }

  playHandler(): void {
    this.showSpinner = true;
  }

  calcelHandler(): void {
    this.showSpinner = false;
    this.dialogRef.close();
  }
}
