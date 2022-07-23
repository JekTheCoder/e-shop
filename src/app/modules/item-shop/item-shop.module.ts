import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemShopRoutingModule } from './item-shop-routing.module';
import { ItemShopComponent } from './components/item-shop/item-shop.component';
import { NgLetDirective } from '@common/directives/ng-let.directive';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from './components/question/question.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ItemShopComponent,
    StarRatingComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    ItemShopRoutingModule,
    MatButtonModule,
    MatIconModule,
    NgLetDirective,
  ]
})
export class ItemShopModule { }
