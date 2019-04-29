import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';

import { Chessground } from 'chessground';
import { Config } from 'chessground/config';
import * as Chess from 'chess.js';

import { toDests, playOtherSide, aiPlay } from '@core/utils/chess.utils';
import { ChessMove } from '@core/interfaces/chess-move.interfaces';
import { ChessGameService } from '@core/services/chess-game/chess-game.service';

@Component({
  selector: 'app-chessground',
  templateUrl: './chessground.component.html',
  styleUrls: ['./chessground.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChessgroundComponent implements OnInit, OnDestroy {

  @ViewChild('chessBoard')
  chessBoard: ElementRef;

  @Output()
  cgMove = new EventEmitter<ChessMove>();

  constructor(
    private chessService: ChessGameService) { }

  ngOnInit() {
    this.chessService.initGame();
    this.chessService.moves.subscribe(move => {
      console.log('moves from server ', move);
    });

    const chess = new Chess();
    const conf: Config  = {
      orientation: 'white',
      highlight: {
        lastMove: true,
        check: true
      },
      animation: {
        enabled: true,
        duration: 200
      },
      movable: {
        color: 'white',
        free: false,
        dests: toDests(chess),
        showDests: true,
      },
      drawable: {
        enabled: true,
        visible: true
      }
    };
    const cg = Chessground(this.chessBoard.nativeElement, conf);

    cg.set({
      movable: {
        events: {
          after: playOtherSide(cg, chess, this.cgMove)
          // after: aiPlay(cg, chess, 1000, false)
        }
      }
    });
  }

  ngOnDestroy() {
    this.chessService.destroyGame();
  }
}
