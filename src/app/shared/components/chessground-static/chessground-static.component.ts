import { Color } from 'chessground/types';
import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild } from '@angular/core';
import { Chessground } from 'chessground';
import { Api } from 'chessground/api';

@Component({
  selector: 'app-chessground-static',
  templateUrl: './chessground-static.component.html',
  styleUrls: ['./chessground-static.component.scss']
})
export class ChessgroundStaticComponent implements OnInit {

  @Input()
  width: number;

  @Input()
  height: number;

  @Input()
  orientation: Color;

  @Input()
  fen: string;

  @ViewChild('chessBoard')
  chessBoard: ElementRef;

  private cg: Api = null;

  private initChessground(): void {
    setTimeout(() => {
      this.cg = Chessground(this.chessBoard.nativeElement, {
        orientation: this.orientation,
        coordinates: false,
        movable: {
          color: null,
          dests: {}
        },
      });
      this.cg.set({ fen: this.fen });
    }, 50);
  }

  constructor() { }

  ngOnInit() {
    this.initChessground();
  }
}
