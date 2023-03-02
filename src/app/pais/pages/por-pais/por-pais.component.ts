import { CountryResponse } from './../../interface/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  mostrarSugerencia:boolean=false

  paises: CountryResponse[] = [];
  paisesSugeridos: CountryResponse[] = [];
  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.mostrarSugerencia=false
    this.hayError = false;
    this.termino = termino;
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

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino=termino
    this.mostrarSugerencia=true
    this.paisService.buscarPaisPorNombre(termino).subscribe((paises) =>
      this.paisesSugeridos = paises.splice(0,4),
      (err)=>this.paisesSugeridos=[]
    );
  }

  buscarSugerido(termino:string){

    this.buscar(termino)
  }
}
