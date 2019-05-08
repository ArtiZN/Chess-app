import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  Output,
  EventEmitter,
  OnDestroy,
  Input
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Chessground } from 'chessground';
import { Color, Key } from 'chessground/types';
import { Api } from 'chessground/api';
import * as Chess from 'chess.js';

import {
  toColor,
  toDests,
  opPlay,
  aiPlay,
  defConfig
} from '@core/utils/chess.utils';
import { MoveConfig } from '@core/interfaces/socketIO.interfaces';
import { ChessMove } from '@core/interfaces/chess-move.interfaces';
import { ChessGameService } from '@core/services/chess-game/chess-game.service';

@Component({
  selector: 'app-chessground',
  templateUrl: './chessground.component.html',
  styleUrls: ['./chessground.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChessgroundComponent implements OnInit, OnDestroy {

  private movesSubscription: Subscription;

  private chess: Chess = new Chess();
  private cg: Api = null;

  orientation: Color;
  gameId: string = null;

  @ViewChild('chessBoard')
  chessBoard: ElementRef;

  @Output()
  cgMove = new EventEmitter<ChessMove>();

  @Input()
  gameMode: string;

  private initChessground() {
    if (!this.cg) {
      this.cg = Chessground(this.chessBoard.nativeElement, defConfig(this.chess, this.orientation));
      this.cg.set({
        movable: {
          events: {
            after: (this.gameMode === 'live') ? opPlay(this.cg, this.chess, this.cgMove) : aiPlay(this.cg, this.chess, 1000, false)
          }
        }
      });
    }
  }

  constructor(
    private chessService: ChessGameService) { }

  ngOnInit() {
    if (this.gameMode === 'live') {
      this.orientation = this.chessService.orientation;
      this.movesSubscription = this.chessService.$moves.subscribe((move: MoveConfig) => {
        console.log('Move', move);
        this.makeMove(move);
      });
      this.initChessground();
    } else {
      this.initChessground();
    }
  }

  ngOnDestroy() {
    if (this.gameMode === 'live') {
      this.chessService.destroySocket();
      this.movesSubscription.unsubscribe();
    }
  }

  makeMove({ from, to }: { from: Key, to: Key }) {
    this.chess.move({ from, to });
    this.cg.move(from, to);
    this.cg.set({
      turnColor: toColor(this.chess),
      movable: {
        color: toColor(this.chess),
        dests: toDests(this.chess)
      }
    });
  }
}
