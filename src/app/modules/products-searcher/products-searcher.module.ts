import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsSearcherRoutingModule } from './products-searcher-routing.module';
import { ProductsSearcherComponent } from './components/products-searcher/products-searcher.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsSearcherComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsSearcherRoutingModule
  ]
})
export class ProductsSearcherModule { }
