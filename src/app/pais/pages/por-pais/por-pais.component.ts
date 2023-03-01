import { CountryResponse } from './../../interface/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;

  paises: CountryResponse[] = [];
  constructor(private paisService: PaisService) {}

  buscar(termino:string) {
    this.hayError = false;
    this.termino=termino;
    this.paisService.buscarPaisPorNombre(this.termino).subscribe(
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
