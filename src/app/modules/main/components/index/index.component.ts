import { Component, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';

import { FakeStoreService } from '@common/services/fake-store.service';
import { FreeCarouselComponent } from '@carousel/components/free-carousel/free-carousel.component';
import { DarkThemeService } from '@common/services/dark-theme.service';

interface Item {
  id: number,
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

  @ViewChild(FreeCarouselComponent) freeCarousel!: FreeCarouselComponent;

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
              { 
                id: product.id,
                title: product.title, 
                body: product.description,
                thumbnail: { alt: product.category, src: product.image }
              })
          ))
        );
  }

}
