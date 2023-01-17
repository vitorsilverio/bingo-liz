import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AutenticaoService } from 'src/app/services/autenticacao.service';



@Injectable()
export class ErroInterceptor implements HttpInterceptor {
    constructor(private autenticaoService: AutenticaoService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.autenticaoService.logout();
                location.reload();
            }

            const error = err.error.message || err.statusText;
            return throwError(() => new Error(error));
        }))
    }
}
