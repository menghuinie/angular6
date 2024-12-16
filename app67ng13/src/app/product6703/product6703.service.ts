//import { Observable } from 'rxjs/Observable';
import {Product6703} from './product6703' 
 
export class Product6703Service{
 
    public getProducts() {
 
        let products:Product6703[];
 
        products=[
            new Product6703(1,'Memory Card',500),
            new Product6703(2,'Pen Drive',750),
            new Product6703(3,'Power Bank',100)
        ]
 
        return products;               
    } 
 
    public getProduct(id:number) {
        let products:Product6703[]=this.getProducts();
        return products.find(p => p.productID==id);
    } 
 
}