import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemShopRoutingModule } from './item-shop-routing.module';
import { ItemShopComponent } from './components/item-shop/item-shop.component';
import { NgLetDirective } from '@common/directives/ng-let.directive';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from './components/question/question.component';
import { MatIconModule } from '@angular/material/icon';
import { AnswerComponent } from './components/answer/answer.component';
import { StarRatingComponent } from '@common/components/star-rating/star-rating.component';


@NgModule({
  declarations: [
    ItemShopComponent,
    QuestionComponent,
    AnswerComponent
  ],
  imports: [
    CommonModule,
    ItemShopRoutingModule,
    MatButtonModule,
    MatIconModule,
    NgLetDirective,
    StarRatingComponent
  ]
})
export class ItemShopModule { }
