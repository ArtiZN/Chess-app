import { Component, OnInit } from '@angular/core';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';

const ELEMENT_DATA: ChessMove[] = [
  {
    N: 1,
    white: 'e2',
    black: 'e4'
  },
];

@Component({
  selector: 'app-moves-table',
  templateUrl: './moves-table.component.html',
  styleUrls: ['./moves-table.component.css']
})
export class MovesTableComponent implements OnInit {
  displayedColumns = ['N', 'white', 'black'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }
}
