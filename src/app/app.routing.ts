import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { HomeComponent } from '@core/components/home/home.component';
import { LoginComponent } from '@core/components/login/login.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: '404', component: NotFoundComponent
  }, {
    path: '**', redirectTo: '/404'
  }
];

export const routing = RouterModule.forRoot(routes);
