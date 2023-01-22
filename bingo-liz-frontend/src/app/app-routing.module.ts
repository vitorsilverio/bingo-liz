import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './guards/auth.guard';
import {SorteiosComponent} from './modules/sorteios/sorteios/sorteios.component';
import {CartelaComponent} from "./modules/cartela/cartela/cartela.component";
import {SorteioComponent} from "./modules/sorteios/sorteio/sorteio.component";

const routes: Routes = [
  { path: '', component: SorteiosComponent, canActivate: [AuthGuard] },
  { path: 'sorteio/:id', component: CartelaComponent, canActivate: [AuthGuard]},
  { path: 'sorteio/:id/sortear', component: SorteioComponent, canActivate: [AuthGuard]},
  { path: 'usuario', loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
