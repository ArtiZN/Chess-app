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
  width: string;

  @Input()
  height: string;

  @ViewChild('chessBoard')
  chessBoard: ElementRef;

  private cg: Api = null;

  private initChessground(): void {
    this.cg = Chessground(this.chessBoard.nativeElement);
  }

  constructor() { }

  ngOnInit() {
    this.initChessground();
  }
}
