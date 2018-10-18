import { Component, OnInit  } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  private products: Array<Product>;
  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
