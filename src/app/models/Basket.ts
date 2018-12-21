import { Product } from './Product';

export interface Basket {
  products: Array<Product>;
  total_price: number;
}
