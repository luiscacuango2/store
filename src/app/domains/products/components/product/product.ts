import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input({required: true}) product!: Products;

  @Output() addToCart = new EventEmitter();
  
  addToCartHandler() {
    console.log('click desde el componente producto (hijo)');
    this.addToCart.emit('hola este es un mensaje desde el componente producto (hijo) ' + this.product.title);
  }
}
