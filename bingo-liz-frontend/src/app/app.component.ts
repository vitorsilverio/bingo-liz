import {Component} from '@angular/core';
import {AutenticaoService} from "./services/autenticacao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private autenticacaoService: AutenticaoService,
    private router: Router
  ) {
  }
  title = 'bingo-liz-frontend';

  autenticado(): boolean {
    return this.autenticacaoService.getUsuario() !== null
  }

  sair() {
    this.autenticacaoService.logout()
    this.router.navigate(['usuario','entrar'])
  }
}
