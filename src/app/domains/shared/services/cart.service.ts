import { Injectable,computed, signal } from '@angular/core'
import { Product } from '../models/product.model' 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([])
  total = computed(()=>{
    const cart = this.cart();
    return  cart.reduce((totalValue,ProductValue:Product) => totalValue + ProductValue.price,0);
  })

  constructor() {

  }

  generateProducts(limit:number){

    const products = []
    for (let index = 0; index < limit; index++) {
      let product =   {
        id: Math.round(Math.random() * 100),
        title: 'pro '+ Math.round(Math.random()*100),
        price: Math.round(Math.random() * 100000),
        image: "https://picsum.photos/640/640?r="+Math.round(Math.random()* 10),
        creationDate: new Date().toISOString()
      }

      products.push(product);
    }


    return products;

  }

  addToCard(product: Product){
    return  this.cart.update(prevList => [...prevList,product]);
  }

  deleteProduct(productId:number){
    this.cart.update( listProduct => listProduct.filter( (product,index) => parseInt(product.id+""+index) != productId ))
  }
}
