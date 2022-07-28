import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsSearcherRoutingModule } from './products-searcher-routing.module';
import { ProductsSearcherComponent } from './components/products-searcher/products-searcher.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OtherFiltersComponent } from './components/other-filters/other-filters.component';


@NgModule({
  declarations: [
    ProductsSearcherComponent,
    SearchBarComponent,
    OtherFiltersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsSearcherRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ProductsSearcherModule { }
