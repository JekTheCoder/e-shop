import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemShopComponent } from './components/item-shop/item-shop.component';

const routes: Routes = [
  {
    path: ':itemId',
    pathMatch: 'full',
    component: ItemShopComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/notfound'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemShopRoutingModule { }
