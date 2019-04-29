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

import { toDests, playOtherSide, aiPlay, opPlay } from '@core/utils/chess.utils';
import { ChessMove } from '@core/interfaces/chess-move.interfaces';
import { ChessGameService } from '@core/services/chess-game/chess-game.service';

@Component({
  selector: 'app-chessground',
  templateUrl: './chessground.component.html',
  styleUrls: ['./chessground.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChessgroundComponent implements OnInit, OnDestroy {

  chess = null;
  cg = null;

  @ViewChild('chessBoard')
  chessBoard: ElementRef;

  @Output()
  cgMove = new EventEmitter<ChessMove>();

  constructor(
    private chessService: ChessGameService) { }

  ngOnInit() {
    this.chessService.initGame();

    this.chessService.moves.subscribe(move => {
      console.log('move from server ', move);
      this.chess.move({ from: move.from, to: move.to });
      this.cg.move(move.from, move.to);
    });

    this.chess = new Chess();
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
        dests: toDests(this.chess),
        showDests: true,
      },
      drawable: {
        enabled: true,
        visible: true
      }
    };
    this.cg = Chessground(this.chessBoard.nativeElement, conf);

    this.cg.set({
      movable: {
        events: {
          // after: playOtherSide(cg, chess, this.cgMove)
          // after: aiPlay(cg, chess, 1000, false)
          after: opPlay(this.cg, this.chess, this.cgMove)
        }
      }
    });
  }

  ngOnDestroy() {
    this.chessService.destroyGame();
  }

  makeMove(cg, chess) {

  }
}
