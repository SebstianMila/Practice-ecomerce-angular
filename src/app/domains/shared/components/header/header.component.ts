import { Component, EventEmitter, Input, Output, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hiseSideMenu = signal(true);
  private cartService = inject(CartService)
  cart = this.cartService.cart;
  total =  this.cartService.total;
  @Output() deleteProduct = new EventEmitter();


  toogleSideMenu(){
    this.hiseSideMenu.update(prevState => !prevState );
  }

  deleteProductById(productId:Product,index:number){
      const id = parseInt(productId.id+""+index)
      this.cartService.deleteProduct(id);
  } 
}
