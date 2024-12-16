import { Component, OnInit } from '@angular/core';
 
import { Product6703Service } from './product6703.service';
import { Product6703 } from './product6703';

@Component({
  selector: 'app-product6703',
  templateUrl: './product6703.component.html',
  styleUrl: './product6703.component.css'
})
export class Product6703Component {

  products: Product6703[] = [];
   
  constructor(private productService:Product6703Service){
  }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}
