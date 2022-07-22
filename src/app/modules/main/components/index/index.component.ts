import { Component, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';

import { FakeStoreService } from '@main/services/fake-store.service';
import { WindowSizeService } from '@common/services/window-size.service';
import { FreeCarouselComponent } from '@carousel/components/free-carousel/free-carousel.component';


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

  @ViewChild(FreeCarouselComponent) freeCarousel?: FreeCarouselComponent;


  items$?: Observable<Item[]>;
  itemsShown?: Observable<number>;

  constructor(
    private store: FakeStoreService,
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
  }

}
