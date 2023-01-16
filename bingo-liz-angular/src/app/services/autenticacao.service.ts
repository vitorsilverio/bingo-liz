import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AutenticacaoModel } from 'src/app/models/autenticacao.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AutenticaoService {

  private tokenSubject: BehaviorSubject<AutenticacaoModel>
  public token: Observable<AutenticacaoModel>

  constructor(private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<AutenticacaoModel>(JSON.parse(localStorage.getItem('autenticacao')!))
    this.token = this.tokenSubject.asObservable()
  }

  public get autenticacao(): AutenticacaoModel {
    return this.tokenSubject.getValue()
  }

  login(usuario: UsuarioModel) {
      return this.http.post<AutenticacaoModel>(`${environment.apiUrl}/auth/entrar`, usuario)
          .pipe(map(autenticacao => {
              localStorage.setItem('token', JSON.stringify(autenticacao))
              this.tokenSubject.next(autenticacao)
              this.setUsuario(usuario.usuario)
              return autenticacao
          }))
  }

  logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('usuario')
      this.tokenSubject.unsubscribe()
  }

  setUsuario(usuario: string){
      localStorage.setItem('usuario', usuario)
  }

  getUsuario(): string|null{
      return localStorage.getItem('usuario')
  }

}
