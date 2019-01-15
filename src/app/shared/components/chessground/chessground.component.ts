import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

import { Chessground } from 'chessground';
import * as Chess from 'chess.js';

import { toDests, playOtherSide } from '@core/utils/chess.utils';

@Component({
  selector: 'app-chessground',
  templateUrl: './chessground.component.html',
  styleUrls: ['./chessground.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChessgroundComponent implements OnInit {

  @ViewChild('chessBoard')
  chessBoard: ElementRef;

  constructor() { }

  ngOnInit() {
    const chess = new Chess();
    const ground = Chessground(this.chessBoard.nativeElement, {
      movable: {
        color: 'white',
        free: false,
        dests: toDests(chess),
      }
    });

    ground.set({
      movable: { events: { after: playOtherSide(ground, chess) } }
    });
  }
}
