import { PopUpService } from './../../services/pop-up.service';
import { BasketService } from './../../services/basket.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/Category';
import { ShopApiService } from '../../services/shop-api.service';
import { Basket } from '../../models/Basket';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  private basket_status: Boolean;
  private basket_count = 0;
  private basket: Basket;
  private find_phrase = '';
  private breadcrumbs: Array<any>;

  constructor(private popupService: PopUpService,
     private shopApi: ShopApiService, private basket_service: BasketService, private router: Router) { }

  ngOnInit() {
    this.basket_service.getBasketStatus().subscribe(basket_status => {
      this.basket_status = basket_status;
    });
    this.basket_service.getProducts().subscribe(basket => {
      this.basket = basket;
      this.basket_count = basket.products.length;
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const brdarray = event.url.split('/');
        if (brdarray[1] === 'shop' && brdarray[2] === 'product') {
          this.shopApi.getProduct(brdarray[3]).subscribe(product => {
            brdarray[3] = product.name;
            this.breadcrumbs = brdarray;
          })
        } else if (brdarray[1] === 'shop' && brdarray[2] === 'category') {
          this.shopApi.getCategory(brdarray[3]).subscribe(cat => {
            brdarray[3] = cat.name;
            this.breadcrumbs = brdarray;
          })
        } else {
        this.breadcrumbs = event.url.split('/');
        }
      }

    });
  }
  toggleBasket(): void {
    this.basket_service.setBasketStatus();
  }
  findInShop() {
    if (!this.find_phrase || this.find_phrase.length === 0) {
      this.popupService.setPopup('Wprowadź dane do wyszukiwarki', 'error');
    } else {
      this.router.navigate(['/shop/find', this.find_phrase]);
    }
  }
    // tslint:disable-next-line:use-life-cycle-interface

  onClickedOutside(e: Event) {
    if (!this.basket_status) {
      this.basket_service.setBasketStatus();
    }
  }
  goToCart(): void{
    this.router.navigate(['/shop/cart']);
    this.onClickedOutside(null);
  }
}
