import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para los Pipes
import { Products } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input({required: true}) product!: Products;

  @Output() addToCart = new EventEmitter<Products>();
  
  addToCartHandler() {
    console.log('click desde el componente producto (hijo)');
    this.addToCart.emit(this.product);
  }
}
