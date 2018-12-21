import { Product } from './../models/Product';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Basket } from '../models/Basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket: Basket = {products: [], total_price: this.calcTotalCost([])};
  private basket$ = new BehaviorSubject<Basket>(this.basket);

  private basket_status = true;
  private basket_status$ = new BehaviorSubject<Boolean>(this.basket_status);

  constructor() { }
  addProduct(product) {
    if (this.basket.products.map(elem => elem._id).indexOf(product._id) !== -1) {
      this.basket.products.find(elem => elem._id === product._id).quantity_select += product.quantity_select;
    } else {
      this.basket.products.push(product);
    }
    this.basket.total_price = this.calcTotalCost(this.basket.products);
    this.basket$.next(this.basket);
  }
  getProducts(): Observable<Basket> {
    return this.basket$.asObservable();
  }
  private calcTotalCost(products): number {
    return products.reduce((previousValue: number, currentValue: Product, index, array): any => {
      return previousValue + (currentValue.price * currentValue.quantity_select);
    }, 0);
  }

  setBasketStatus(): void {
    this.basket_status = !this.basket_status;
    this.basket_status$.next(this.basket_status);
  }
  getBasketStatus(): Observable<Boolean>{
    return this.basket_status$.asObservable();
  }
  removeItem(index: number): void {
    this.basket.products.splice(index, 1);
    this.basket$.next(this.basket);
  }

}
