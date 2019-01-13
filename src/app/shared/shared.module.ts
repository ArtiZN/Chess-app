import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessgroundComponent } from './components/chessground/chessground.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ChessgroundComponent
  ],
  declarations: [ChessgroundComponent]
})
export class SharedModule { }
