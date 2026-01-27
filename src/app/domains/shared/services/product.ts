import { inject, Injectable } from '@angular/core';
import { Products } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() {}

  getProducts() {
    return this.http.get<Products[]>('https://api.escuelajs.co/api/v1/products');
  }
  
}
