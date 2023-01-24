import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({providedIn: "root"})
export class MensagemService {

  constructor(
    private snackBar: MatSnackBar
  ) {
  }

  erro(mensagem: any){
    this.snackBar.open(JSON.stringify(mensagem),"Fechar", {duration:2000, horizontalPosition:"end", verticalPosition:"top", panelClass: ["mensagem-erro"]})
  }

  sucesso(mensagem: any){
    this.snackBar.open(JSON.stringify(mensagem),"Fechar", {duration:2000, horizontalPosition:"end", verticalPosition:"top", panelClass: ["mensagem-sucesso"]})
  }
}
