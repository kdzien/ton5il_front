import { BasketComponent } from './main/basket/basket.component';
import { MainShopComponent } from './main/main-shop/main-shop.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './main/app.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { ShopComponent } from './main/shop/shop.component';
import { CategoryComponent } from './main/category/category.component';
import { NewsComponent } from './main/news/news.component';
import { ProductComponent } from './main/product/product.component';
import { FindComponent } from './main/find/find.component';

export const routes: Routes = [
  // { path: '', component: AppComponent, canActivate: [LoginGuard]},
  { path: '', pathMatch: 'full', redirectTo: 'shop'},
  { path: 'shop', component: ShopComponent,
    children: [
      {path: '', component: MainShopComponent,
        children: [
          {path: '', component: NewsComponent},
          {path: 'category/:id', component: CategoryComponent},
          {path: 'find/:text', component: FindComponent}
        ]},
      {path: 'product/:id', component: ProductComponent}
      {path: 'cart', component: BasketComponent}
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
