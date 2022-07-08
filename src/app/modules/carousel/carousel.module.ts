import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NgLetDirective } from '@standalone/directives/ng-let.directive'

import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { CustomCarouselComponent } from './components/custom-carousel/custom-carousel.component';
import { ChipsControllerComponent } from './components/chips-controller/chips-controller.component';


@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemComponent,
    CustomCarouselComponent,
    ChipsControllerComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    NgLetDirective
  ],
  exports: [
    CarouselComponent,
    CarouselItemComponent,
  ]
})
export class CarouselModule { }
