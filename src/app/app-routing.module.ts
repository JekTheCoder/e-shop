import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './app/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => (import ('./modules/main/main.module')).then(m => m.MainModule)
  },
  {
    path: 'shop',
    loadChildren: () => (import ('./modules/item-shop/item-shop.module')).then(m => m.ItemShopModule)
  },
  {
    path: 'search',
    loadChildren: () => (import('./modules/products-searcher/products-searcher.module').then(m => m.ProductsSearcherModule))
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
