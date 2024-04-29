import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';


@Component({
  selector: 'app-product-datail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-datail.component.html',
  styleUrl: './product-datail.component.css'
})
export default class ProductDatailComponent {
  
  @Input() id?: string; 
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product = signal<Product|null>(null);
  cover = signal('');
  ngOnInit(){
    if(this.id){
      this.productService.getProductById(this.id).subscribe({
        next: (product)=>{
            if (product.images.length > 0) {
            this.cover.set(product.images[0])
            this.product.set(product);
          }
        }
      })
    }
  }

  addProduct(product:Product|null){ 
    if (product){
      return this.cartService.addToCard(product)
    }
  }
  changeCover(imageUrl:string){
    this.cover.set(imageUrl);
  }
  
}
