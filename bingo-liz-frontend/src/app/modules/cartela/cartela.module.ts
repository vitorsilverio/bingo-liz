import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartelaComponent } from './cartela/cartela.component';
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    CartelaComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class CartelaModule { }
