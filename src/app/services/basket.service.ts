import { Product } from './../models/Product';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private products: Array<Product> = [];
  private products$ = new BehaviorSubject<Array<Product>>(this.products);
  private basket_status = true;
  private basket_status$ = new BehaviorSubject<Boolean>(this.basket_status);
  constructor() { }
  addProduct(product){
    this.products.push(product);
    this.products$.next(this.products);
  }
  getProducts(): Observable<Array<Product>> {
    return this.products$.asObservable();
  }
  setBasketStatus(): void {
    this.basket_status = !this.basket_status;
    this.basket_status$.next(this.basket_status);
  }
  getBasketStatus(): Observable<Boolean>{
    return this.basket_status$.asObservable();
  }

}
