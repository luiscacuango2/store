import { Component, signal, Output, EventEmitter, computed, SimpleChange, input, inject} from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; // Para formateo de moneda
import { Products } from '../../models/product.model';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-header',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total
  totalItems = this.cartService.totalItems;
 
  // Definimos un Output para avisar al componente padre que debe eliminar un item
  @Output() removeFromCartEvent = new EventEmitter<Products>();

  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  } 

  // Creamos la función que el HTML está buscando
  removeFromCart(product: Products) {
    // Emitimos el evento para que el servicio o el padre maneje la lógica
    this.removeFromCartEvent.emit(product);
    console.log(`Auditoría: Producto ${product.title} marcado para eliminación.`);
  }

}
