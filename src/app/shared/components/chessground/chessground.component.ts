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
import { MoveConfig, GameConfig } from '@core/interfaces/socketIO.interfaces';
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
  private gameSubscription: Subscription;

  private chess: Chess = new Chess();
  private cg: Api = null;

  orientation: Color;
  gameId: string = null;

  @ViewChild('chessBoard')
  chessBoard: ElementRef;

  @Output()
  cgMove = new EventEmitter<ChessMove>();

  private initChessground() {
    this.cg = Chessground(this.chessBoard.nativeElement, defConfig(this.chess, this.orientation));
    this.cg.set({
      movable: {
        events: {
          // after: playOtherSide(cg, chess, this.cgMove)
          after: aiPlay(this.cg, this.chess, 1000, false)
          // after: opPlay(this.cg, this.chess, this.cgMove)
        }
      }
    });
  }

  constructor(
    private chessService: ChessGameService) { }

  ngOnInit() {
    // this.chessService.initSocket();

    // this.movesSubscription = this.chessService.moves.subscribe((move: MoveConfig) => {
    //   this.makeMove(move);
    // });
    // this.gameSubscription = this.chessService.messages.subscribe((message: GameConfig) => {
    //   this.chessService.gameId = message.gameId;
    //   this.gameId = message.gameId;
    //   this.orientation = message.color;
    //   this.initChessground();
    // });
    this.initChessground();
  }

  ngOnDestroy() {
    // this.chessService.destroySocket();
    // this.movesSubscription.unsubscribe();
    // this.gameSubscription.unsubscribe();
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
