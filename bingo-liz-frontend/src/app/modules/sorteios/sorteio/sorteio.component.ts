import {Component} from '@angular/core';
import {SorteioService} from "src/app/services/sorteio.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, Observer} from "rxjs";
import {CartelaPremiadaModel} from "src/app/models/cartela-premiada.model";
import {CartelaService} from "src/app/services/cartela.service";

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.scss'],
})
export class SorteioComponent {

  id: string|null;
  ultimoNumero: number = 0;
  numerosSorteados: number[] = []
  sorteioFinalizado: boolean = false
  cartelasPremiadas: Observable<CartelaPremiadaModel[]>

  constructor(
    private sorteioService: SorteioService,
    private route: ActivatedRoute,
    private cartelaService: CartelaService,
  ) {
    this.id = this.route.snapshot.paramMap.get('id')

    if(this.id){
      this.sorteioService.listarSorteioNumerosSorteador(this.id).subscribe({
        next: n => {
          this.numerosSorteados = n.numerosSorteados
          if (this.numerosSorteados.length == 75) {
            this.sorteioFinalizado = true
          }
        }
      })
    }
    this.cartelasPremiadas = new Observable<CartelaPremiadaModel[]>(
      (observer: Observer<CartelaPremiadaModel[]>) => {
      setInterval(() => this.atualizarCartelasQueDeramBingo(observer), 5000)
    })
  }

  atualizarCartelasQueDeramBingo(observer: Observer<CartelaPremiadaModel[]>) {
    if(this.id) {
      this.cartelaService.listarCartelasPremiadas(this.id).subscribe({
        next: c => {
          observer.next([...c])
        }
      })
    }
  }

  sortear() {
    if (this.numerosSorteados.length == 75) {
      this.sorteioFinalizado = true
      return
    }

    let numero = Math.ceil(Math.random() * 75)
    if (this.numerosSorteados.includes(numero)) {
      this.sortear();
      return;
    }
    this.sorteioService.adicionarNumeroSorteado(this.id!, numero).subscribe({
      next: _ => {
        this.numerosSorteados.push(numero)
        this.ultimoNumero = numero;
      }
    })

  }
  verificar(id: string) {

  }
}
