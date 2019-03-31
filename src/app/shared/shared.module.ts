import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxAutoScrollModule } from 'ngx-auto-scroll';

import { ChessgroundComponent } from './components/chessground/chessground.component';
import { MovesTableComponent } from './components/moves-table/moves-table.component';
import { ChatAreaComponent } from './components/chat-area/chat-area.component';
import { CheakerPawnComponent } from './components/cheaker-pawn/cheaker-pawn.component';
import { CheakerKingComponent } from './components/cheaker-king/cheaker-king.component';
import { SpaceComponent } from './components/space/space.component';
import { CheakersGameBoardComponent } from './components/cheakers-game-board/cheakers-game-board.component';

@NgModule({
  imports: [
    CommonModule,
    NgxAutoScrollModule,
    MaterialModule
  ],
  exports: [
    ChessgroundComponent,
    MovesTableComponent,
    ChatAreaComponent,

    CheakerPawnComponent,
    CheakerKingComponent,
    SpaceComponent
  ],
  declarations: [
    ChessgroundComponent,
    MovesTableComponent,
    ChatAreaComponent,
    CheakerPawnComponent,
    CheakerKingComponent,
    SpaceComponent,
    CheakersGameBoardComponent
  ]
})
export class SharedModule { }
