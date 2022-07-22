import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemShopRoutingModule } from './item-shop-routing.module';
import { ItemShopComponent } from './components/item-shop/item-shop.component';


@NgModule({
  declarations: [
    ItemShopComponent
  ],
  imports: [
    CommonModule,
    ItemShopRoutingModule
  ]
})
export class ItemShopModule { }
