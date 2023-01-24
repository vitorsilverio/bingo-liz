import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AutenticaoService } from 'src/app/services/autenticacao.service';
import { matchValidator } from 'src/app/util/form-validators';
import {MensagemService} from "../../../services/mensagem.service";

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

  constructor(
    private autenticaoService: AutenticaoService,
    private router: Router,
    private mensagemService: MensagemService,
    ) {
    this.form = new FormGroup<EntrarForm>({
      usuario: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      senha: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, matchValidator('repetirSenha', true)]}),
      repetirSenha: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, matchValidator('senha')]})
    })
  }

  cadastrar(){
    this.autenticaoService.registrar(this.form.value as UsuarioModel).subscribe({
      next: _ => {
          this.router.navigate(['/'])
      },
      error: e => this.mensagemService.erro(e)
    })

  }

}
