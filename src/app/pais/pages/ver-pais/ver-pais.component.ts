import { CountryResponse } from './../../interface/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  pais!: CountryResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.buscarPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais[0]);

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);

    //   this.paisService.buscarPaisPorCodigo(id)
    //   .subscribe((pais)=>{
    //     console.log(pais);

    //   })

    // });
  }
}
