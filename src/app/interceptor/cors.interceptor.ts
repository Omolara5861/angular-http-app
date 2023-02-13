import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, retry, catchError, EMPTY } from 'rxjs';
import { CustomResponse } from '../interfaces/response';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<CustomResponse>, next: HttpHandler): Observable<HttpEvent<CustomResponse>> {
    /** Sends Access-Control-Allow-Origin to request header */
    const reqCopy = request.clone({setHeaders: {'Access-Control-Allow-Origin': '*'}});
    return next.handle(reqCopy).pipe(
      /** Incase of an error this method retries the request 3 times before it eventually fails*/
      retry(3)
    );
  }
}
