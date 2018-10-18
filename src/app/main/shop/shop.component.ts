import { BasketService } from './../../services/basket.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/Category';
import { ShopApiService } from '../../services/shop-api.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  private basket_status: Boolean;
  private basket_count = 0;
  private basket_products: Array<Product>;
  private total_cost = 0;
  constructor(private shopApi: ShopApiService, private basket_service: BasketService) { }

  ngOnInit() {
    this.basket_service.getBasketStatus().subscribe(basket_status => {
      this.basket_status = basket_status;
    });
    this.basket_service.getProducts().subscribe(products => {
      this.basket_products = products;
      this.basket_count = products.length;
    });
  }
  toggleBasket(): void {
    this.basket_service.setBasketStatus();
  }
    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterContentChecked()  {
      if (this.basket_products) {
        this.total_cost = this.basket_products.reduce((previousValue: number, currentValue: Product, index, array): any => {
          return previousValue + currentValue.price;
        }, 0);
      }
    }
    onClickedOutside(e: Event) {
      if (!this.basket_status) {
        this.basket_service.setBasketStatus();
      }
    }
}
