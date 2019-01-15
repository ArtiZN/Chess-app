import { Component, OnInit, Input } from '@angular/core';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';

@Component({
  selector: 'app-moves-table',
  templateUrl: './moves-table.component.html',
  styleUrls: ['./moves-table.component.css']
})
export class MovesTableComponent implements OnInit {
  displayedColumns = ['N', 'white', 'black'];

  @Input()
  dataSource: ChessMove[] = [];

  constructor() { }

  ngOnInit() {
  }
}
