import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeStoreService, Product } from '@common/services/fake-store.service';
import { Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.scss']
})
export class ItemShopComponent implements OnInit {

  product$?: Observable<Product | null>;

  question = {
    content: 'aodawoddwadwadawdwa',
    user: 'awdawdaw',
    question: 'dawdawdawrfqwawaeaw',
    date: new Date()
  }

  constructor(
    protected fs: FakeStoreService,
    protected route: ActivatedRoute,
    protected router: Router
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        const idStr = params.get('itemId');
        console.log(idStr);
        const id = Number(idStr);
        return this.fs.getOne(id);
      }),
      tap(value => { 
        if (!value) this.router.navigate(['/notfound'])
       })
    )
  }

}
