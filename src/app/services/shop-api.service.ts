import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/Category';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ShopApiService {
  private api_url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Array<Category>> {
    return this.http.get<any>(`${this.api_url}/categories`);
  }
  getProduct(product_id: string): Observable<Product> {
    return this.http.get<any>(`${this.api_url}/product/${product_id}`);
  }
  getCategory(category_id: string): Observable<Category>{
    return this.http.get<any>(`${this.api_url}/category/${category_id}`);
  }
  getProducts(category_id: string): Observable<any> {
    return this.http.get<any>(`${this.api_url}/products/${category_id}`);
  }
  findInShop(find_phrase: string): Observable<Array<Product>> {
    return this.http.get<any>(`${this.api_url}/products/find/${find_phrase}`);
  }
  getPromotions(): Observable<any> {
    return this.http.get<any>(`${this.api_url}/shop/promotions`);
  }
}
