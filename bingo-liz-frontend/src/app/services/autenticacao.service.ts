import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {AutenticacaoModel} from 'src/app/models/autenticacao.model';
import {UsuarioModel} from 'src/app/models/usuario.model';
import {environment} from 'src/environments/environment';
import jwtDecode from "jwt-decode";
import {Router} from "@angular/router";

interface CustomClaims {
  iss?: string
  sub?: string
  aud?: string[] | string
  exp?: number
  nbf?: number
  iat?: number
  jti?: string
  role?: string
}

@Injectable({providedIn: 'root'})
export class AutenticaoService {

  private tokenSubject: BehaviorSubject<AutenticacaoModel>
  public token: Observable<AutenticacaoModel>

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.tokenSubject = new BehaviorSubject<AutenticacaoModel>(JSON.parse(localStorage.getItem('token')!))
    this.token = this.tokenSubject.asObservable()
  }

  public get autenticacao(): AutenticacaoModel {
    return this.tokenSubject.getValue()
  }

  public get role(): string|undefined {
    return jwtDecode<CustomClaims>(this.autenticacao.token).role
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

  registrar(usuario: UsuarioModel) {
    return this.http.post<AutenticacaoModel>(`${environment.apiUrl}/auth/registrar`, usuario)
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
    this.tokenSubject.complete()
    this.router.navigate(["/"])
  }

  setUsuario(usuario: string) {
    localStorage.setItem('usuario', usuario)
  }

  getUsuario(): string | null {
    return localStorage.getItem('usuario')
  }

}
