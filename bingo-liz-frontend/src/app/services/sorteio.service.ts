import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SorteioModel } from 'src/app/models/sorteio.model';
import { environment } from 'src/environments/environment';
import {NumerosSorteadosModel} from "../models/numeros-sorteados.model";

@Injectable({
  providedIn: 'root'
})
export class SorteioService {

  constructor(
    private http: HttpClient
  ) { }

  listarSorteios(): Observable<SorteioModel[]>{
    return this.http.get<SorteioModel[]>(`${environment.apiUrl}/sorteio`)
  }

  criarSorteio(sorteio: SorteioModel): Observable<SorteioModel> {
    return this.http.post<SorteioModel>(`${environment.apiUrl}/sorteio`, sorteio)
  }

  listarSorteioNumerosSorteador(id: string): Observable<NumerosSorteadosModel>{
    return this.http.get<NumerosSorteadosModel>(`${environment.apiUrl}/sorteio/${id}`)
  }

  adicionarNumeroSorteado(id: string, numero: number): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/sorteio/${id}`, numero)
  }
}
