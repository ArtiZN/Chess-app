import { Component, OnInit } from '@angular/core';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';

@Component({
  selector: 'app-moves-table',
  templateUrl: './moves-table.component.html',
  styleUrls: ['./moves-table.component.css']
})
export class MovesTableComponent implements OnInit {
  displayedColumns = ['N', 'white', 'black'];
  dataSource: ChessMove[] = [];

  constructor() { }

  ngOnInit() {
  }
}
