import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemShopRoutingModule } from './item-shop-routing.module';
import { ItemShopComponent } from './components/item-shop/item-shop.component';
import { NgLetDirective } from '@common/directives/ng-let.directive';
import { StarRatingComponent } from './star-rating/star-rating.component';


@NgModule({
  declarations: [
    ItemShopComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    ItemShopRoutingModule,
    NgLetDirective
  ]
})
export class ItemShopModule { }
