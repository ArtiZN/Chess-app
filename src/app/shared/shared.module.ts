import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessgroundComponent } from './components/chessground/chessground.component';
import { MovesTableComponent } from './components/moves-table/moves-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ChessgroundComponent
  ],
  declarations: [ChessgroundComponent, MovesTableComponent]
})
export class SharedModule { }
