import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeStoreService, Product } from '@common/services/fake-store.service';
import { map, mergeMap, Observable, ReplaySubject, Subject, takeUntil, tap } from 'rxjs';
import { Filters } from '../../interfaces/filters.interface';

@Component({
  selector: 'app-products-searcher',
  templateUrl: './products-searcher.component.html',
  styleUrls: ['./products-searcher.component.scss']
})
export class ProductsSearcherComponent implements OnInit, OnDestroy {

  protected productsFiltered$?: Observable<Product[]>;
  protected filters$ = new ReplaySubject<Filters>(1);

  protected unsuscriber$ = new Subject<void>();

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: FakeStoreService
  ) { }

  ngOnInit(): void {
    this.filters$.next({ categories: [] });

    this.route.queryParams
      .pipe(takeUntil(this.unsuscriber$))
      .subscribe(queryParams => this.filters$.next(queryParams));

    this.productsFiltered$ =
      this.store.getSomeProducts()
        .pipe(mergeMap(products => this.filters$.pipe(map(filters => this.filterProducts(products, filters)))));
  }

  ngOnDestroy(): void {
    this.unsuscriber$.next();
    this.unsuscriber$.complete();
  }

  protected filterProducts(products: Product[], filters: Filters) {
    return products.filter(product => (
      product.title.toLowerCase().includes((filters.title || '').toLowerCase()) &&
      ((!filters.categories || filters.categories!.length === 0) || Boolean(filters.categories!.find(category => category.toLowerCase() === product.category)))
    )
    )
  }

  search(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { title: value },
      queryParamsHandling: 'merge'
    });
  }
}
