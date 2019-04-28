import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';

import { Chessground } from 'chessground';
import * as Chess from 'chess.js';

import { toDests, playOtherSide, aiPlay } from '@core/utils/chess.utils';
import { ChessMove } from '@core/interfaces/chess-move.interfaces';

@Component({
  selector: 'app-chessground',
  templateUrl: './chessground.component.html',
  styleUrls: ['./chessground.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChessgroundComponent implements OnInit {

  @ViewChild('chessBoard')
  chessBoard: ElementRef;

  @Output()
  cgMove = new EventEmitter<ChessMove>();

  constructor() { }

  ngOnInit() {
    const chess = new Chess();
    const cg = Chessground(this.chessBoard.nativeElement, {
      orientation: 'white',
      movable: {
        color: 'white',
        free: false,
        dests: toDests(chess, this.cgMove),
        showDests: true,
      }
    });

    cg.set({
      movable: {
        events: {
          after: playOtherSide(cg, chess, this.cgMove)
          // after: aiPlay(cg, chess, 1000, false)
        }
      }
    });
  }

  makeMove(chess) {
    console.log(chess);
  }
}
