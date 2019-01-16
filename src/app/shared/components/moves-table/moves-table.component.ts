import { Component, OnInit, Input, AfterViewChecked, ViewChild, ElementRef, OnChanges } from '@angular/core';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';

@Component({
  selector: 'app-moves-table',
  templateUrl: './moves-table.component.html',
  styleUrls: ['./moves-table.component.css']
})
export class MovesTableComponent implements OnInit, OnChanges {
  displayedColumns = ['N', 'white', 'black'];

  @ViewChild('scrollBottom')
  private tableContainer: ElementRef;

  @Input()
  data: ChessMove[];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {

  }
}
