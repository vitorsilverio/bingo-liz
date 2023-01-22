import {FormControl, Validators} from '@angular/forms';
import {SorteioModel} from 'src/app/models/sorteio.model';
import {Observable} from 'rxjs';
import {Component} from '@angular/core';
import {SorteioService} from 'src/app/services/sorteio.service';
import {Router} from "@angular/router";
import {AutenticaoService} from "../../../services/autenticacao.service";

@Component({
  selector: 'app-sorteios',
  templateUrl: './sorteios.component.html',
  styleUrls: ['./sorteios.component.scss']
})
export class SorteiosComponent{

  sorteios: Observable<SorteioModel[]>
  titulo: FormControl<string>

  constructor(
    private sorteioService: SorteioService,
    private router: Router,
    private autenticacaoService: AutenticaoService
  ) {
    this.sorteios = this.sorteioService.listarSorteios()
    this.titulo = new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
  }

  novo() {
    this.sorteioService.criarSorteio({titulo: this.titulo.value} as SorteioModel).subscribe({
      next: _ => {
        this.sorteios = this.sorteioService.listarSorteios()
      }
    })
  }

  participar(sorteio: string) {
    this.router.navigate(['sorteio',sorteio])
  }

  podeCriar() : boolean {
    return this.autenticacaoService.role === 'PAPAI'
  }

  sortear(sorteio: string) {
      this.router.navigate(['sorteio',sorteio,'sortear'])
  }
}
