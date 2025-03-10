import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtService } from '../common/service/JwtService';

@Injectable()
export class EmployeeInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) {}

 /*  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cloneReq = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const token: string | null = this.jwtService.getAccessToken();

    return next.handle(this.injectToken(cloneReq, token)).pipe(
      tap((event: HttpEvent<any>) => {
        console.log('Incoming HTTP response', event);
      })
    );
} */

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      const token: string | null = localStorage.getItem('Authorization')
      const modifiedRequest = request.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      });
  
      return next.handle(modifiedRequest);
    }

injectToken(request: HttpRequest<any>, token: string | null) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
}
}
