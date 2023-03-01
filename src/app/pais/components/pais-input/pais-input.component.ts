import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder:string=''

  // Se dispara una unica vez cuando el componente es creado y ya est[a inicializado]
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300))//Cuento tiempo va a pasar despues de que dejas de ecribir para evitir un valor o que haga algo
    .subscribe((valor) => {
      this.onDebounce.emit(valor)
    });
  }

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teaclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
