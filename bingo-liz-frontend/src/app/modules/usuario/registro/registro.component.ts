import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface EntrarForm {
  usuario: FormControl<string>
  senha: FormControl<string>
  repetirSenha: FormControl<string>
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  form: FormGroup<EntrarForm>

  constructor() {
    this.form = new FormGroup<EntrarForm>({
      usuario: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      senha: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      repetirSenha: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
    })
  }

  cadastrar(){

  }

}
