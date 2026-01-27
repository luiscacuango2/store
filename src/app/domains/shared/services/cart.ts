import { Injectable, computed, signal } from '@angular/core';
import { Products } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  cart = signal<Products[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });
  
  // Auditoría: Usamos computed para que el valor sea reactivo y eficiente
  totalItems = computed(() => this.cart().length);
    
  constructor() {}

  getCart() {
    return this.cart();
  }

  addToCart(product: Products) {
    this.cart.update(state => [...state, product]);
    console.log(`Auditoría: Producto ${product.title} añadido al carrito.`);
  }

  removeFromCart(item: Products) {
    this.cart.update((currentCart) =>
      currentCart.filter((product) => product.id !== item.id)
    );
    console.log(`Auditoría: Producto ${item.title} eliminado del carrito.`);
  }

  clearCart() {
    this.cart.set([]);
    console.log('Auditoría: Carrito vaciado.');
  } 
  
}
