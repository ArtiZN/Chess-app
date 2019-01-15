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
    // const chess = new Chess();
    // const ground = Chessground(this.chessBoard.nativeElement, {
    //   movable: {
    //     color: 'white',
    //     free: false,
    //     dests: this.toDests(chess)
    //   }
    // });

    // ground.set({
    //   movable: { events: { after: this.playOtherSide(ground, chess) } }
    // });
  }
}
