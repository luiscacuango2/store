import { Component, signal } from '@angular/core';
import { Product } from './../../components/product/product';
import { Products } from '../../../shared/models/product.model';
import { Header } from "../../../shared/components/header/header";

@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  products = signal<Products[]>([]);
  cart = signal<Products[]>([]);

  constructor() {
    const initProducts: Products[] = [
      {
        id: 1,
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r23',
        description: 'Descripción del producto 1',
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Producto 2',
        price: 200,
        image: 'https://picsum.photos/640/640?r13',
        description: 'Descripción del producto 2',
        createdAt: new Date().toISOString()
      },
      {
        id: 3,
        title: 'Producto 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r33',
        description: 'Descripción del producto 3',
        createdAt: new Date().toISOString()
      },
      {
        id: 1,
        title: 'Producto 4',
        price: 100,
        image: 'https://picsum.photos/640/640?r43',
        description: 'Descripción del producto 1',
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Producto 5',
        price: 200,
        image: 'https://picsum.photos/640/640?r53',
        description: 'Descripción del producto 2',
        createdAt: new Date().toISOString()
      },
      {
        id: 3,
        title: 'Producto 6',
        price: 300,
        image: 'https://picsum.photos/640/640?r63',
        description: 'Descripción del producto 3',
        createdAt: new Date().toISOString()
      },
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Products) {
    this.cart.update((prevCart) => [...prevCart, product]);
    console.log(this.cart());
  }
}
