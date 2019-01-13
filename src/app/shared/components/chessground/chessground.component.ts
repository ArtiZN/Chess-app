import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

import { Chessground } from 'chessground';
import * as Chess from 'chess.js';

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
        dests: this.toDests(chess)
      }
    });

    ground.set({
      movable: { events: { after: this.playOtherSide(ground, chess) } }
    });
  }

  toDests(chess: any) {
    const dests = {};
    chess.SQUARES.forEach(s => {
      const ms = chess.moves({square: s, verbose: true});
      if (ms.length) {
        dests[s] = ms.map(m => m.to);
      }
    });
    return dests;
  }

  playOtherSide(cg, chess) {
    return (orig, dest) => {
      chess.move({from: orig, to: dest});
      cg.set({
        turnColor: this.toColor(chess),
        movable: {
          color: this.toColor(chess),
          dests: this.toDests(chess)
        }
      });
    };
  }

  toColor(chess: any) {
    return (chess.turn() === 'w') ? 'white' : 'black';
  }
}
