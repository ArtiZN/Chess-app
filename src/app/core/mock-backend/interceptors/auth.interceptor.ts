import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const testUser = { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' };

    return of(null).pipe(
      mergeMap(() => {
        if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
          if (request.body.username === testUser.username && request.body.password === testUser.password) {
            const body = {
              id: testUser.id,
              username: testUser.username,
              firstName: testUser.firstName,
              lastName: testUser.lastName,
              token: 'fake-jwt-token'
            };
            return of(new HttpResponse({ status: 200, body }));
          } else {
            return throwError({ error: { message: 'Username or password is incorrect' } });
          }
        }
        if (request.url.endsWith('/users') && request.method === 'GET') {
          if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            return of(new HttpResponse({ status: 200, body: [testUser] }));
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
