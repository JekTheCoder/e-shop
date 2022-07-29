import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ProductsSearcherRoutingModule } from './products-searcher-routing.module';

import { ProductsSearcherComponent } from './components/products-searcher/products-searcher.component';
import { OtherFiltersComponent } from './components/other-filters/other-filters.component';
import { ProductLabelComponent } from './components/product-label/product-label.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { StarRatingComponent } from '@common/components/star-rating/star-rating.component';
import { RemoveFilterPipe } from './pipes/remove-filter.pipe';


@NgModule({
  declarations: [
    ProductsSearcherComponent,
    SearchBarComponent,
    OtherFiltersComponent,
    ProductLabelComponent,
    RemoveFilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsSearcherRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    StarRatingComponent
  ]
})
export class ProductsSearcherModule { }
