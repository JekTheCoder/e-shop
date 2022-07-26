import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsSearcherComponent } from './components/products-searcher/products-searcher.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsSearcherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsSearcherRoutingModule { }
