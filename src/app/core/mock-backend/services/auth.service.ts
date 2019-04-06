import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(
    private injector: Injector,
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`http://localhost:4200/users/authenticate`, { username, password })
      .pipe(
        map((user: any) => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.injector.get(Router).navigate(['/login']);
  }
}
