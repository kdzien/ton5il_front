import { Component, OnInit  } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { Basket } from '../../models/Basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  private basket: Basket;
  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.getProducts().subscribe(basket => {
      this.basket = basket;
    });
  }
  removeItem(index) {
    this.basketService.removeItem(index);
  }
}
