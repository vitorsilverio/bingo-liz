import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartelaService} from "src/app/services/cartela.service";
import {CartelaModel} from "src/app/models/cartela.model";
import {Observable} from "rxjs";
import {NumeroCartelaModel} from "src/app/models/numero-cartela.model";
import {SorteioService} from "src/app/services/sorteio.service";

@Component({
  selector: 'app-cartela',
  templateUrl: './cartela.component.html',
  styleUrls: ['./cartela.component.scss']
})
export class CartelaComponent
{

  cartela?: Observable<CartelaModel> //= of({numerosCartela:[]})
  id: string|null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartelaService: CartelaService,
    private sorteioService: SorteioService

  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id) {
      this.cartela = this.cartelaService.carregarCartela(this.id)
    }else{
      this.router.navigate(['/'])
    }
  }

  carregarCartela() {
    if(this.id) {
      this.cartela = this.cartelaService.carregarCartela(this.id)
    }
  }

  reordenar(numeros: NumeroCartelaModel[]|undefined): NumeroCartelaModel[] {
    if(numeros)
      return numeros.sort(
        (n1,n2) => n1.ordem - n2.ordem
      )
    return []
  }

  marcar(numero: NumeroCartelaModel|undefined) {
    if (numero) {
      numero.marcado = !numero.marcado
      this.cartelaService.marcar(numero).subscribe({
        next: _ => this.carregarCartela()
      })
    }
  }

  bingo() {

  }
}
