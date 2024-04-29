import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '@productos/components/product/product.component';

import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoriesService } from '@shared/services/categories.service';
import { Category } from '@shared/models/category.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent,HeaderComponent,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export  default class ListComponent {
  
  @Input() category_id?: string

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService)
  private categoryService  = inject(CategoriesService)

  ngOnInit(){
    this.getCategories();
  }

  ngOnChanges(changes:SimpleChanges){
    this.getProducts();
    
  }
  
  
  addToCard(product: Product){
    console.group("addToCard")
    this.cartService.addToCard(product)
    console.groupEnd()

  }

  private getProducts(){
    this.productService.getProducts(this.category_id).subscribe({
      next: (product) =>{
        this.products.set(product)
      },
      error:() =>{
        console.log("Error recibir los producto");
        
      }
    })
  }
   
  private getCategories(){
    this.categoryService.getAllCatergories().subscribe({
      next: (category) =>{
        this.categories.set(category)
      },
      error:() =>{
        console.log("Error recibir los producto");
        
      }
    })
  }




}
