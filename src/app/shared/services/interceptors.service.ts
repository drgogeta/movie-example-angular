import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { SessionUtils } from '../utils';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = SessionUtils.getToken();
    let reqClone: HttpRequest<any>;
    if (token) {
        if (req.body === null) {
          reqClone = req.clone({
            headers: req.headers
              .set('Authorization', `Bearer ${token}`)
          });
        } else {
          reqClone = req.clone({
            headers: req.headers
              .set('Authorization', `Bearer ${token}`)
              .set('Content-Type', 'application/json')
          });
        }
      return next.handle(reqClone).pipe(
        catchError(error => {
          if (error.status === 401 || error.status === 403) {
            SessionUtils.closeSession(this.router);
          } else if (error.status === 500 && (error.error.message.indexOf('401'.toLowerCase()) > -1) ) {
            SessionUtils.closeSession(this.router);
          }
          return throwError(error);
        })
      );
    }
    return next.handle(req);
  }

}
