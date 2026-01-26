import { Component, signal, Output, EventEmitter, computed, SimpleChange, input} from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; // Para formateo de moneda
import { Products } from '../../models/product.model';

@Component({
  selector: 'app-header',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  hideSideMenu = signal(true);
  cart = input.required<Products[]>();

  // Auditoría: Usamos computed para que el valor sea reactivo y eficiente
  totalItems = computed(() => this.cart().length);

  // Cálculo del total del carrito
  calcularTotal = computed(() =>
    this.cart().reduce((total, product) => total + product.price, 0)
  );

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
