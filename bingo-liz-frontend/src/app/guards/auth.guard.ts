import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AutenticaoService } from 'src/app/services/autenticacao.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private autenticaoService: AutenticaoService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.autenticaoService.getUsuario();
        if (currentUser) {
            return true;
        }

        this.router.navigate(['usuario','entrar'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
