import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeStoreService, Product } from '@common/services/fake-store.service';
import { map, mergeMap, Observable, ReplaySubject, Subject, takeUntil, tap } from 'rxjs';
import { Filters } from '../../interfaces/filters.interface';
import { ProductFilterService } from '../../services/product-filter.service';

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
    protected store: FakeStoreService,
    protected filterSer: ProductFilterService
  ) { }

  ngOnInit(): void {
    this.filters$.next({});

    this.route.queryParamMap
      .pipe(
        map(params => {
          const strPriceRange = params.getAll('priceRange');

          return ({
            title: params.get('title') || undefined,
            priceRange: [Number(strPriceRange[0]), Number(strPriceRange[1])],
            categories: params.getAll('categories')
          })
        }),
        takeUntil(this.unsuscriber$)
      )
      .subscribe(this.filters$)

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
      this.filterSer.filterByTitle(product, filters.title) && this.filterSer.filterByCategory(product, filters.categories) && this.filterSer.filterByPriceRange(product, filters.priceRange)
    ));
  }

  search(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { title: value },
      queryParamsHandling: 'merge'
    });
  }

  addFilters(filters: Filters) {
    console.log(filters);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ...filters },
      queryParamsHandling: 'merge'
    });
  }
}
