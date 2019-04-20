import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
  delay,
  mergeMap,
  materialize,
  dematerialize
} from 'rxjs/operators';

import { testUsers } from '@core/mock-backend/constants/user.constants';
import {
  pluckArray,
  isIncludes,
  getFirst,
  appendToObj
} from '@core/utils/core.utils';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(
      mergeMap(() => {
        if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
          const username = request.body.username;
          const password = request.body.password;

          if (isIncludes(pluckArray(testUsers, 'username'), username) &&
              isIncludes(pluckArray(testUsers, 'password'), password)) {
            const body = appendToObj(
              getFirst(testUsers.filter(u => u.username === username && u.password === password)),
              'token',
              'fake-jwt-token'
            );
            return of(new HttpResponse({ status: 200, body }));
          } else {
            return throwError({ error: { message: 'Username or password is incorrect' } });
          }
        } else if (request.url.endsWith('/users') && request.method === 'GET') {
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
