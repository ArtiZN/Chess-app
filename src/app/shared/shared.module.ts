import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxAutoScrollModule } from 'ngx-auto-scroll';

import { ChessgroundComponent } from './components/chessground/chessground.component';
import { MovesTableComponent } from './components/moves-table/moves-table.component';
import { ChatAreaComponent } from './components/chat-area/chat-area.component';
import { CheakerPawnComponent } from './components/cheaker-pawn/cheaker-pawn.component';
import { CheakerKingComponent } from './components/cheaker-king/cheaker-king.component';

@NgModule({
  imports: [
    CommonModule,
    NgxAutoScrollModule,
    MaterialModule
  ],
  exports: [
    ChessgroundComponent,
    MovesTableComponent,
    ChatAreaComponent
  ],
  declarations: [
    ChessgroundComponent,
    MovesTableComponent,
    ChatAreaComponent,
    CheakerPawnComponent,
    CheakerKingComponent
  ]
})
export class SharedModule { }
