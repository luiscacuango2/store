import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input({required: true}) img: string = '';
  @Input() price: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';

  @Output() addToCart = new EventEmitter();
  
  addToCartHandler() {
    console.log('click desde el componente producto (hijo)');
    this.addToCart.emit('hola este es un mensaje desde el componente producto (hijo) ' + this.title);
  }
}
