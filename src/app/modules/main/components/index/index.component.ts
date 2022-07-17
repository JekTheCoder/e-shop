import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FakeStoreService } from '../../services/fake-store.service';

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

  items$?: Observable<Item[]>;

  constructor(private store: FakeStoreService) { }

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
