import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { EntrarComponent } from './entrar/entrar.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    RegistroComponent,
    EntrarComponent,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    UsuarioRoutingModule,
  ]
})
export class UsuarioModule { }
