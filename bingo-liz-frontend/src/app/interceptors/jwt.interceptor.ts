import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticaoService } from 'src/app/services/autenticacao.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private autenticaoService: AutenticaoService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token: string|null = this.autenticaoService.autenticacao?.token;

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}
