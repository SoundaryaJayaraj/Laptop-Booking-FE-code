import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("From Interceptor", request);
    // let authToken = sessionStorage.getItem("accessToken");
    if (request.url !== 'http://localhost:8080/api/v1/authenticate'&& request.url !== 'http://localhost:8080/api/v1/customer') {
      console.log("into if")
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
        },
      });
    }
    else {
      console.log("into else")
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        },
      });
    }
    return next.handle(request);
  }
}
