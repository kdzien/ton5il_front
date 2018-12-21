import { PopUpService } from './../../services/pop-up.service';
import { ShopApiService } from './../../services/shop-api.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/Product';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductComponent implements OnInit {
  private product: Product;
  private quantities: Array<number>;
  private quantity_selected: any;
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private shopApi: ShopApiService, private basketService: BasketService, private router: Router
  , private popupService: PopUpService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const product_id = params.id;
      this.shopApi.getProduct(product_id).subscribe(product => {
        this.product = product;
        this.quantities = Array.from(new Array(this.product.quantity), (val, index) => index + 1);
        this.quantity_selected = this.quantities[0];
      });
    });
  }
  addProduct(): void {
    // tslint:disable-next-line:radix
    this.product.quantity_select = parseInt(this.quantity_selected);
    this.basketService.addProduct(this.product);
    this.popupService.setPopup('Dodano produkt do koszyka', 'info');
  }
  previousPage(): void {
    this.router.navigate(['/shop/category', this.product.category]);
  }
  selectQuantity(qt): void {
    this.quantity_selected = qt + 1;
  }

}
