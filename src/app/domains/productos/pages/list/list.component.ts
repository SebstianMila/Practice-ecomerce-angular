import { Component, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  constructor() {
    const initProducts: Product[] = this.cartService.generateProducts(4);
    this.products.set(initProducts);
  }
  
  
  addToCard(product: Product){
    console.group("addToCard")
    this.cartService.addToCard(product)
    console.groupEnd()

  }




}
