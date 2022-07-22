import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
