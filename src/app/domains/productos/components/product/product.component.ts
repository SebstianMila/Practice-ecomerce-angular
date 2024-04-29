import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CurrencyPipe,UpperCasePipe } from "@angular/common";
import { ReversePipe  } from "@shared/pipes/reverse.pipe";
import { Product } from '@shared/models/product.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe,UpperCasePipe,ReversePipe,RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  @Input({required:true}) product!: Product;

  @Output() addToCard = new EventEmitter();

  addToCardHandler(){
      this.addToCard.emit(this.product) 
  }

}
