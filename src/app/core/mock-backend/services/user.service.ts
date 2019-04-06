import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { User } from '@core/interfaces/user.interfaces';

@Injectable()
export class UserService {

  user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`http://localhost:4200/users`);
  }

  updateUser(user: User): void {
    this.user$.next(user);
  }

  getUser(): User {
    return this.user$.value;
  }
}
