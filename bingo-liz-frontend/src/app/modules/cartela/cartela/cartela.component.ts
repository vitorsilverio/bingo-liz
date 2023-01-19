import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartelaService} from "src/app/services/cartela.service";
import {CartelaModel} from "../../../models/cartela.model";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-cartela',
  templateUrl: './cartela.component.html',
  styleUrls: ['./cartela.component.scss']
})
export class CartelaComponent
{

  cartela: Observable<CartelaModel> = of()
  constructor(
    private route: ActivatedRoute,
    private cartelaService: CartelaService,
    private router: Router
  ) {
    let id = this.route.snapshot.paramMap.get('id')
    if(id) {
      this.cartela = this.cartelaService.carregarCartela(id)
    }else{
      this.router.navigate(['/'])
    }
  }


}
