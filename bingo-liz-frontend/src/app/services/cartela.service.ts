import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartelaModel } from 'src/app/models/cartela.model';
import { environment } from 'src/environments/environment';

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
}
