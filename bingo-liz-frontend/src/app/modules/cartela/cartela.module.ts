import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartelaComponent } from './cartela/cartela.component';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    CartelaComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class CartelaModule { }
