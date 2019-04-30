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
import { Color } from 'chessground/types';
import { Api } from 'chessground/api';
import * as Chess from 'chess.js';

import { toColor, toDests, playOtherSide, aiPlay, opPlay, defConfig } from '@core/utils/chess.utils';
import { ChessMove } from '@core/interfaces/chess-move.interfaces';
import { ChessGameService } from '@core/services/chess-game/chess-game.service';

@Component({
  selector: 'app-chessground',
  templateUrl: './chessground.component.html',
  styleUrls: ['./chessground.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChessgroundComponent implements OnInit, OnDestroy {

  chess: Chess = new Chess();
  cg: Api = null;

  orientation: Color;
  gameId: string = null;

  @ViewChild('chessBoard')
  chessBoard: ElementRef;

  @Output()
  cgMove = new EventEmitter<ChessMove>();

  constructor(private chessService: ChessGameService) { }

  ngOnInit() {
    this.chessService.initGame();

    this.chessService.moves.subscribe(move => {
      console.log('move from server ', move);
      this.chess.move({ from: move.from, to: move.to });
      this.cg.move(move.from, move.to);
      this.cg.set({
        turnColor: toColor(this.chess),
        movable: {
          color: toColor(this.chess),
          dests: toDests(this.chess)
        }
      });
    });

    this.chessService.messages.subscribe(message => {
      this.chessService.gameID = message.gameId;

      this.gameId = message.gameId;
      this.orientation = message.color;

      this.cg = Chessground(this.chessBoard.nativeElement, defConfig(this.chess, this.orientation));
      this.cg.set({
        movable: {
          events: {
            // after: playOtherSide(cg, chess, this.cgMove)
            // after: aiPlay(cg, chess, 1000, false)
            after: opPlay(this.cg, this.chess, this.cgMove)
          }
        }
      });
    });
  }

  ngOnDestroy() {
    this.chessService.destroyGame();
  }
}
