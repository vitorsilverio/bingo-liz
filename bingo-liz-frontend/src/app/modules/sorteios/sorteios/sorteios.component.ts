import { FormControl, Validators } from '@angular/forms';
import { SorteioModel } from 'src/app/models/sorteio.model';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { SorteioService } from 'src/app/services/sorteio.service';

@Component({
  selector: 'app-sorteios',
  templateUrl: './sorteios.component.html',
  styleUrls: ['./sorteios.component.scss']
})
export class SorteiosComponent{

  sorteios: Observable<SorteioModel[]>
  titulo: FormControl<string>

  constructor(
    private sorteioService: SorteioService
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

}
