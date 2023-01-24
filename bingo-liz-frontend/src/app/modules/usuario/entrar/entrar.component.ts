import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticaoService } from 'src/app/services/autenticacao.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MensagemService} from "../../../services/mensagem.service";

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

  constructor(
    private autenticacaoService: AutenticaoService,
    private router: Router,
    private route: ActivatedRoute,
    private mensagemService: MensagemService

    ) {
      this.form = new FormGroup<EntrarForm>({
      usuario: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      senha: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
    })
  }

  entrar() {
    this.autenticacaoService.login(this.form.value as UsuarioModel).subscribe({
      next: _ => {
        let redirecionamento = this.route.snapshot.queryParamMap.get('returnUrl')
        if(redirecionamento){
          this.router.navigate([redirecionamento])
        }else{
          this.router.navigate(['/'])
        }
      },
      error: error => {
        this.mensagemService.erro("Erro ao entrar. Usuário e senha estão corretos?")
      }
    })
  }

}
