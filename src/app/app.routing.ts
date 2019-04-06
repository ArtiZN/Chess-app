import { ChessGameComponent } from '@core/components/chess-game/chess-game.component';
import { CheakersGameComponent } from '@core/components/cheakers-game/cheakers-game.component';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { LoginComponent } from '@core/components/login/login.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/cheakers', pathMatch: 'full'
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: 'cheakers', component: CheakersGameComponent
  }, {
    path: 'chess', component: ChessGameComponent
  }, {
    path: '404', component: NotFoundComponent
  }, {
    path: '**', redirectTo: '/404'
  }
];

export const routing = RouterModule.forRoot(routes);
