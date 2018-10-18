import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './main/app.component';
import { MainShopComponent } from './main/main-shop/main-shop.component';
import { BasketComponent } from './main/basket/basket.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { ShopComponent } from './main/shop/shop.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './main/product/product.component';
import { CategoryComponent } from './main/category/category.component';
import { NewsComponent } from './main/news/news.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FindComponent } from './main/find/find.component';
import { ClickOutsideModule } from 'ng4-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    MainShopComponent,
    BasketComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProductComponent,
    ShopComponent,
    CategoryComponent,
    NewsComponent,
    OrderByPipe,
    FindComponent
  ],
  imports: [
    ClickOutsideModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes
    ),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
