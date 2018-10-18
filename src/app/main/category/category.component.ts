import { Category } from './../../models/Category';
import { ShopApiService } from './../../services/shop-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  private category_id: string;
  private products: Array<Product>;
  private currentCategory: Category;
  private currentSort = 'up';
  private currentViewStyle = '1fr 1fr 1fr';
  constructor(private route: ActivatedRoute, private shopApi: ShopApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category_id = params.id;
      this.shopApi.getProducts(this.category_id).subscribe(response => {
        this.currentCategory = response.category;
        this.products = response.products;
      });
    });
  }

}
