import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface EntrarForm {
  usuario: FormControl<string>
  senha: FormControl<string>
}

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent {

  form: FormGroup<EntrarForm>

  constructor() {
    this.form = new FormGroup<EntrarForm>({
      usuario: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      senha: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
    })
  }

  entrar() {

  }

}
