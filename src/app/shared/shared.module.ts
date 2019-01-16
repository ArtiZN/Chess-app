import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxAutoScrollModule } from 'ngx-auto-scroll';

import { ChessgroundComponent } from './components/chessground/chessground.component';
import { MovesTableComponent } from './components/moves-table/moves-table.component';
import { ChatAreaComponent } from './components/chat-area/chat-area.component';

@NgModule({
  imports: [
    CommonModule,
    NgxAutoScrollModule,
    MaterialModule
  ],
  exports: [
    ChessgroundComponent,
    MovesTableComponent
  ],
  declarations: [
    ChessgroundComponent,
    MovesTableComponent,
    ChatAreaComponent
  ]
})
export class SharedModule { }
