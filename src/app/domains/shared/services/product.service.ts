import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private url = new URL('https://api.escuelajs.co/api/v1/products/')
  constructor() { }


  getProducts(categoryId?:string){
    if (categoryId) {
      this.url.searchParams.set('categoryId',categoryId)
    }
    return this.http.get<Product[]>(this.url.toString())
  }

  getProductById(productId:string){ 
    return this.http.get<Product>(`${this.url.toString()}${productId}`)
  }
}
