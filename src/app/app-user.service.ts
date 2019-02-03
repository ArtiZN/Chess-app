import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthenticationService } from '@core/mock-backend/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AppUserService {

  constructor(
    // private router: Router,
   private authService: AuthenticationService
    ) {
  }

  load() {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
        this.authService.logout();
        resolve(true);
      // }, 2000);
    });
  }
}
