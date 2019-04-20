import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { testUsers } from '@core/mock-backend/constants/user.constants';

import { getOne, pluck, isEmpty, isIncludes } from '@core/utils/core.utils';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(
      mergeMap(() => {
        if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
          /* if (request.body.username === testUser.username && request.body.password === testUser.password) {
            const body = {
              id: testUser.id,
              username: testUser.username,
              token: 'fake-jwt-token'
            };
            return of(new HttpResponse({ status: 200, body }));
          } else {
            return throwError({ error: { message: 'Username or password is incorrect' } });
          } */

          if (isIncludes(getOne(testUsers, 'username'), request.body.username) &&
              isIncludes(getOne(testUsers, 'password'), request.body.password)) {
            const body = testUsers.filter(u => u.username === request.body.username && u.password === request.body.password)[0];
            body['token'] = 'fake-jwt-token';
            return of(new HttpResponse({ status: 200, body }));
          } else {
            return throwError({ error: { message: 'Username or password is incorrect' } });
          }
        }
        if (request.url.endsWith('/users') && request.method === 'GET') {
          if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            return of(new HttpResponse({ status: 200, body: testUsers }));
          } else {
            return throwError({ error: { message: 'Unauthorised' } });
          }
        }
        return next.handle(request);
      })).pipe(materialize()).pipe(delay(500)).pipe(dematerialize());
    }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
