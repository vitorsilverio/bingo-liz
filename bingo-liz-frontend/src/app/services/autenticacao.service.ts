import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AutenticacaoModel } from 'src/app/models/autenticacao.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AutenticaoService {

  constructor(private http: HttpClient) {

  }

  public get autenticacao(): AutenticacaoModel {
    return JSON.parse(localStorage.getItem('token')!)
  }

  login(usuario: UsuarioModel) {
      return this.http.post<AutenticacaoModel>(`${environment.apiUrl}/auth/entrar`, usuario)
          .pipe(map(autenticacao => {
              localStorage.setItem('token', JSON.stringify(autenticacao))
              localStorage.setItem('usuario', usuario.usuario)
              return autenticacao
          }))
  }

  registrar(usuario: UsuarioModel) {
    return this.http.post<AutenticacaoModel>(`${environment.apiUrl}/auth/registrar`, usuario)
        .pipe(map(autenticacao => {
            localStorage.setItem('token', JSON.stringify(autenticacao))
            localStorage.setItem('usuario', usuario.usuario)
            return autenticacao
        }))
}

  logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('usuario')
  }

  setUsuario(usuario: string){
      localStorage.setItem('usuario', usuario)
  }

  getUsuario(): string|null{
      return localStorage.getItem('usuario')
  }

}
