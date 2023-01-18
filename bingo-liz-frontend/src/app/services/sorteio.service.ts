import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SorteioModel } from 'src/app/models/sorteio.model';
import { environment } from 'src/environments/environment';

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
}
