import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticaoService } from 'src/app/services/autenticacao.service';

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
    private route: ActivatedRoute
    ) {
      this.form = new FormGroup<EntrarForm>({
      usuario: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      senha: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
    })
  }

  entrar() {
    this.autenticacaoService.login(this.form.value as UsuarioModel).subscribe({
      next: _ => {
        let redirecionamento = this.route.snapshot.paramMap.get('returnUrl')
        console.log(redirecionamento)
        if(redirecionamento){
          this.router.navigate([redirecionamento])
        }else{
          this.router.navigate(['/'])
        }
      }
    })
  }

}
