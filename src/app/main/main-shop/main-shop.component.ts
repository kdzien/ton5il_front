import { ShopApiService } from './../../services/shop-api.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/Category';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.component.html',
  styleUrls: ['./main-shop.component.scss']
})
export class MainShopComponent implements OnInit {
  private categories: Array<Category>;
  private find_phrase = '';
  constructor(private shopApi: ShopApiService, private router: Router) { }
  ngOnInit() {
    this.shopApi.getCategories().subscribe(categories => {
      this.categories = categories;
    }, err => {
      console.log(err);
    });
  }
  findInShop() {
    this.router.navigate(['/shop/find', this.find_phrase]);
  }
}
