import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { CustomCarouselComponent } from './components/custom-carousel/custom-carousel.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemComponent,
    CustomCarouselComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    CarouselComponent,
    CarouselItemComponent,
  ]
})
export class CarouselModule { }
