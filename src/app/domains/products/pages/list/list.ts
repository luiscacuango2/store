import { Component, inject, signal } from '@angular/core';
import { Product } from './../../components/product/product';
import { Products } from '../../../shared/models/product.model';
import { Header } from "../../../shared/components/header/header";
import { CartService } from '../../../shared/services/cart';
import { ProductService } from '../../../shared/services/product';

@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  products = signal<Products[]>([]);
  private cartService = inject(CartService);
  private productsService = inject(ProductService);

  ngOnInit() {
    this.productsService.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
        console.error('Error al cargar los productos.');
      } 
    });
  }

  addToCart(product: Products) {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: Products) {
    this.cartService.removeFromCart(product);
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
