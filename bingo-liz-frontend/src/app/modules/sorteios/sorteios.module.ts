import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { SorteiosComponent } from './sorteios/sorteios.component';
import { SorteioComponent } from './sorteio/sorteio.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDialogModule} from "@angular/material/dialog";
import { NumerosSorteadosDialogComponent } from './numeros-sorteados-dialog/numeros-sorteados-dialog.component';



@NgModule({
  declarations: [
    SorteiosComponent,
    SorteioComponent,
    NumerosSorteadosDialogComponent
  ],
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatDialogModule
    ]
})
export class SorteiosModule { }
