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
    // NO ASYNC AQUI
    // Antes render
    console.log('ngOnInit');
    console.log('-'.repeat(10));
  }

  ngAfterViewInit() {
    // AQUI SI ASYNC
    // Despues render
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

}
