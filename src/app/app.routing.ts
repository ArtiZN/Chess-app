import { HomeComponent } from '@core/components/home/home.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  }, {
    path: '**', redirectTo: '/404'
  }
];

export const routing = RouterModule.forRoot(routes);
