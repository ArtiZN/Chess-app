import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxAutoScrollModule } from 'ngx-auto-scroll';

import { MaterialModule } from './../material/material.module';
import { ChessgroundComponent } from '@shared/components/chessground/chessground.component';
import { MovesTableComponent } from '@shared/components/moves-table/moves-table.component';
import { ChatAreaComponent } from '@shared/components/chat-area/chat-area.component';
import { CheakerPawnComponent } from '@shared/components/cheaker-pawn/cheaker-pawn.component';
import { CheakerKingComponent } from '@shared/components/cheaker-king/cheaker-king.component';
import { SpaceComponent } from '@shared/components/space/space.component';
import { CheakersGameBoardComponent } from '@shared/components/cheakers-game-board/cheakers-game-board.component';
import { AvatarIconComponent } from '@shared/components/avatar-icon/avatar-icon.component';
import { MostSuccessfullGamesComponent } from './components/most-successfull-games/most-successfull-games.component';

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
    AvatarIconComponent,
    MostSuccessfullGamesComponent,

    CheakerPawnComponent,
    CheakerKingComponent,
    SpaceComponent,
    CheakersGameBoardComponent
  ],
  declarations: [
    ChessgroundComponent,
    MovesTableComponent,
    ChatAreaComponent,
    AvatarIconComponent,
    MostSuccessfullGamesComponent,

    CheakerPawnComponent,
    CheakerKingComponent,
    SpaceComponent,
    CheakersGameBoardComponent,
    AvatarIconComponent,
    MostSuccessfullGamesComponent
  ]
})
export class SharedModule { }
