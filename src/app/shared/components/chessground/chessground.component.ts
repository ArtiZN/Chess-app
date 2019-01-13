import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

import { Chessground } from 'chessground';

@Component({
  selector: 'app-chessground',
  templateUrl: './chessground.component.html',
  styleUrls: ['./chessground.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChessgroundComponent implements OnInit {

  @ViewChild('ChessBoard')
  chessBoard: ElementRef;

  constructor() { }

  ngOnInit() {
    const ground = Chessground(this.chessBoard.nativeElement);
  }
}
