import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsSearcherRoutingModule } from './products-searcher-routing.module';
import { ProductsSearcherComponent } from './components/products-searcher/products-searcher.component';


@NgModule({
  declarations: [
    ProductsSearcherComponent
  ],
  imports: [
    CommonModule,
    ProductsSearcherRoutingModule
  ]
})
export class ProductsSearcherModule { }
