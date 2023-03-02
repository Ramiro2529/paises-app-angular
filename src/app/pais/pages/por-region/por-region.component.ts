import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { CountryResponse } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  hayError: boolean = false;

  paises: CountryResponse[] = [];
  constructor(private paisService: PaisService) {}

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paisService.buscarPaisPorRegion(region).subscribe(
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

  getClaseCSS(region: string) {
    return region === this.regionActiva
      ? 'btn btn-dark'
      : 'btn btn-outline-dark';
  }
}
