import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(products: Array<Product>, args?: any): any {
    console.log(args)
    if (products) {
      products.sort((a: any, b: any) => {
        if (a.price < b.price) {
          return args == 'up' ? -1 : 1;
        } else if (a.price > b.price) {
          return args == 'up' ? 1 : -1;
        } else {
          return 0;
        }
      });
      return products;
    }
    return products;
  }

}
