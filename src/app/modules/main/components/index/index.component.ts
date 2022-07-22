import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { FakeStoreService } from '@main/services/fake-store.service';
import { WindowSizeService } from '@common/services/window-size.service';


interface Item {
  title: string,
  body: string,
  thumbnail: {
    alt: string,
    src: string
  }
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  freePosition = 0;

  items$?: Observable<Item[]>;
  itemsShown?: Observable<number>;

  constructor(
    private store: FakeStoreService,
    private windowSize: WindowSizeService
    ) { }

  ngOnInit(): void {
    this.items$ = 
      this.store.getSomeProducts(0)
        .pipe(
          map(products => products.map<Item>(
            product => (
              { title: product.title, 
                body: product.description,
                thumbnail: { alt: product.category, src: product.image }
              })
          ))
        );

    this.windowSize.windowSize$;
  }

  next() {
    console.log(this.freePosition);
    this.freePosition += 1;
  }

}
