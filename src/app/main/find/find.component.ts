import { ShopApiService } from './../../services/shop-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['../category/category.component.scss']
})
export class FindComponent implements OnInit {
  private find_phrase: string;
  private products: Array<Product>;
  private currentSort = 'up';
  constructor(private shopApi: ShopApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.find_phrase = params.text;
      this.shopApi.findInShop(this.find_phrase).subscribe(products => {
        this.products = products;
      });
    });
  }

}
