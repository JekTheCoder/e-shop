import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ObserversModule } from '@angular/cdk/observers'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from '../carousel/carousel.module'

import { IndexComponent } from './components/index/index.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { StringPipe } from '@standalonepipes/string.pipe';

@NgModule({
  declarations: [
    IndexComponent,
    ItemCardComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatButtonModule,
    CarouselModule,
    ObserversModule,
    StringPipe
  ]
})
export class MainModule { }
