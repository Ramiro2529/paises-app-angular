import { CountryResponse } from './../interface/pais.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl='https://restcountries.com/v3.1'

  constructor(private http:HttpClient) { }

  buscarPaisPorNombre(termino:string):Observable<CountryResponse[]>{

    const url=`${this.apiUrl}/name/${termino}`
    return this.http.get<CountryResponse[]>(url);
    // .pipe(
    //   catchError(err=>of
    //     ([]))
    // )
    // rxjs
  }

  buscarPaisPorCapital(termino:string):Observable<CountryResponse[]>{

    const url=`${this.apiUrl}/capital/${termino}`
    return this.http.get<CountryResponse[]>(url);
    // .pipe(
    //   catchError(err=>of
    //     ([]))
    // )
    // rxjs
  }

  buscarPaisPorCodigo(id:string):Observable<CountryResponse[]>{

    const url=`${this.apiUrl}/alpha/${id}`
    return this.http.get<CountryResponse[]>(url);
    // .pipe(
    //   catchError(err=>of
    //     ([]))
    // )
    // rxjs
  }


}
