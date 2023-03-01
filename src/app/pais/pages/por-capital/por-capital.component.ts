import { Component } from '@angular/core';
import { PaisService } from './../../services/pais.service';
import { CountryResponse } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  paises: CountryResponse[] = [];

  constructor(private paisService: PaisService) {}
  termino: string = '';
  hayError: boolean = false;

  buscar(termino:string) {
    this.hayError = false;
    this.termino=termino;
    this.paisService.buscarPaisPorCapital(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        console.log(err);
        console.log('error');
        this.hayError = true;
        this.paises = [];
      }
    );
  }
  sugerencias(termino:string){
    this.hayError = false;
  }

}
