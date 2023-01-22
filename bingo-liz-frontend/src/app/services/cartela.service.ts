import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartelaModel } from 'src/app/models/cartela.model';
import { environment } from 'src/environments/environment';
import {NumeroCartelaModel} from "../models/numero-cartela.model";
import {CartelaPremiadaModel} from "../models/cartela-premiada.model";

@Injectable({
  providedIn: 'root'
})
export class CartelaService {

  constructor(
    private http: HttpClient
  ) { }

  carregarCartela(sorteio: string): Observable<CartelaModel>{
    let params = new HttpParams({
      fromObject: {sorteio: sorteio}
    })
    return this.http.get<CartelaModel>(`${environment.apiUrl}/cartela`, {params: params})
  }

  marcar(numero: NumeroCartelaModel) :Observable<NumeroCartelaModel>{
    return this.http.post<NumeroCartelaModel>(`${environment.apiUrl}/numerocartela/${numero.id}`, numero)
  }

  listarCartelasPremiadas(id: string) : Observable<CartelaPremiadaModel[]>{
    return this.http.get<CartelaPremiadaModel[]>(`${environment.apiUrl}/sorteio/${id}/cartelasbingo`)
  }

  gritarBingo(id: string) : Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/cartela/${id}`, null)
  }
}
