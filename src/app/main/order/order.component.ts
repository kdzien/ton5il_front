import { BasketService } from './../../services/basket.service';
import { Component, OnInit } from '@angular/core';
import { Basket } from '../../models/Basket';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  private basket: Basket;
  orderInfoForm: FormGroup;
  constructor(private basketService: BasketService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.basketService.getProducts().subscribe(basket => {
      this.basket = basket;
    });
    this.orderInfoForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: '',
      country: '',
      address: '',
      moreaddress: '',
      city: '',
      state: '',
      zip: '',
      phonenumber: ''
    });
  }
  submitForm(form: any): void {
    console.log(form);
  }
}
