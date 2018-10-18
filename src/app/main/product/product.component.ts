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
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private shopApi: ShopApiService, private basketService: BasketService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const product_id = params.id;
      this.shopApi.getProduct(product_id).subscribe(product => {
        this.product = product;
      });
    });
  }
  addProduct(): void {
    this.basketService.addProduct(this.product);
  }
  previousPage(): void {
    console.log(this.product);
    this.router.navigate(['/shop/category', this.product.category]);
  }
}
