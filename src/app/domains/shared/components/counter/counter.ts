import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  constructor() {
    // NO ASYNC AQUI
    // Antes render
    // Corre una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChange) {
    // NO ASYNC AQUI
    // Antes y durante render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }

  ngOnInit() {
    // ES ASYNC, THEN SUBSCRIBE
    // Despues render
    // Corre una vez
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('Duration => ', this.duration);
    console.log('Message => ', this.message);
  }

  ngAfterViewInit() {
    // Despues render
    // hijos ya fueron pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // Despues render
    // justo antes de destruir el componente
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

}
