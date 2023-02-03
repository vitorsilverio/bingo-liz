import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-numeros-sorteados-dialog',
  templateUrl: './numeros-sorteados-dialog.component.html',
  styleUrls: ['./numeros-sorteados-dialog.component.scss']
})
export class NumerosSorteadosDialogComponent {

  numerosSorteados!: number[]

  constructor(
    private dialogRef: MatDialogRef<NumerosSorteadosDialogComponent>
  ) {
  }

}
