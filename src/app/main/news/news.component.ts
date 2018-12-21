import { BasketService } from './../../services/basket.service';
import { Component, OnInit } from '@angular/core';
import { ShopApiService } from 'src/app/services/shop-api.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  private bestsellers: Array<Product>;
  private news: Array<Product>;
  constructor(private shopApi: ShopApiService) { }

  ngOnInit() {
    this.shopApi.getPromotions().subscribe(promotions => {
      this.bestsellers = promotions.bestsellers;
      this.news = promotions.news;
    });
  }

}
