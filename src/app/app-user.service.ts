import { User } from '@core/interfaces/user.interfaces';
import { Injectable, Injector } from '@angular/core';

import { AuthenticationService } from '@core/mock-backend/services/auth.service';
import { UserService } from '@core/mock-backend/services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AppUserService {

  constructor(
    private injector: Injector,
    private authService: AuthenticationService,
    private userService: UserService) { }

  load() {
    return new Promise((resolve, reject) => {
      const user: User = JSON.parse(localStorage.getItem('currentUser'));
      if (localStorage.getItem('currentUser')) {
        this.userService.updateUser(user);
      } else {
        this.authService.logout();
        this.injector.get(Router).navigate(['/login']);
      }
      resolve(true);
    });
  }
}
