import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ViewEncapsulation,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Chessground } from 'chessground';
import { Key, Role, MoveMetadata } from 'chessground/types';
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
import { GameModes } from '@core/interfaces/game.interafces';
import { ChessGameService } from '@core/services/chess-game/chess-game.service';
import { PromotionChoiceComponent } from '@shared/components/promotion-choice/promotion-choice.component';

@Component({
  selector: 'app-chessground',
  templateUrl: './chessground.component.html',
  styleUrls: ['./chessground.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChessgroundComponent implements OnInit, OnDestroy {

  private promotinRef: ComponentRef<PromotionChoiceComponent>;
  private movesSubscription: Subscription;
  private promotionSubject: Subject<any> = new Subject();
  private chess: Chess = new Chess();
  private cg: Api = null;

  @ViewChild('chessBoard')
  chessBoard: ElementRef;

  @ViewChild('promotionContainer', { read: ViewContainerRef })
  entry: ViewContainerRef;

  @Output()
  cgMove = new EventEmitter<ChessMove>();

  private initChessground(): void {
    this.cg = Chessground(this.chessBoard.nativeElement, defConfig(this.chess, this.chessService.orientation));
    this.cg.set({
      movable: {
        events: {
          after: (this.chessService.mode === GameModes.LIVE) ?
            opPlay(this.cg, this.chess, this.cgMove) : aiPlay(this.cg, this.chess, this.promotionSubject, this.cgMove),
            afterNewPiece: (role: Role, key: Key, metadata: MoveMetadata) => {
              console.log(role, key, metadata);
            }
        }
      }
    });
  }

  constructor(
    private resolver: ComponentFactoryResolver,
    private chessService: ChessGameService) { }

  ngOnInit() {
    this.movesSubscription = this.chessService.$moves.subscribe((move: MoveConfig) => {
      console.log('Move', move);
      this.makeMove(move);
    });
    this.initChessground();
    this.promotionSubject.subscribe((col: any) => {
      this.createComponent(91, col.column - 1, col.color);
    });
  }

  ngOnDestroy() {
    this.chessService.destroySocket();
    this.movesSubscription.unsubscribe();
    this.promotionSubject.unsubscribe();
  }

  makeMove({ from, to }: { from: Key, to: Key }): void {
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

  createComponent(top: number, column: number, color: string) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(PromotionChoiceComponent);
    this.promotinRef = this.entry.createComponent(factory);
    this.promotinRef.instance.top = top + 'px';
    this.promotinRef.instance.color = color;
    this.promotinRef.instance.column = column;
    this.promotinRef.instance.promotion
      .pipe(take(1))
      .subscribe((role: Role) => {
        this.promotionSubject.next(role);
        this.destroyComponent();
      });
  }

  destroyComponent() {
    this.promotinRef.destroy();
  }
}
