import { TestBed } from '@angular/core/testing';
import { Product } from '@common/services/fake-store.service';

import { ProductFilterService } from './product-filter.service';

describe('ProductFilterService', () => {
  let service: ProductFilterService;
  const productTemplate: Product = {
    id: 0,
    category: '',
    title: '',
    price: 0,
    description: '',
    image: '',
    rating: {
      count: 0,
      rate: 0
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('title filter', () => {
    it('should filter product by title', () => {
      const products: Product[] = [{ ...productTemplate, title: 'titulo' }, { ...productTemplate, title: 'tlitulo' }];
  
      expect(service.filterByTitle(products[0], 'tit')).toBe(true);
      expect(service.filterByTitle(products[1], 'tit')).toBe(false);
    });

    it('should not filter empty titles', () => {
      const products: Product[] = [{ ...productTemplate, title: 'titulo' }, { ...productTemplate, title: 'tlitulo' }];

      products.forEach(product => expect(service.filterByTitle(product)).toBeTruthy());
    })
  })

  describe('category filter', () => {
    it('should filter by category', () => {
      const products: Product[] = [{ ...productTemplate, category: 'cate1' }, {...productTemplate, category: 'cate2'}];

      const productsFiltered = products.filter(product => service.filterByCategory(product, ['cate1']));

      expect(productsFiltered).toEqual([{...productTemplate, category: 'cate1'}]);
    });

    it('should not filter empty categories filter', () => {
      const products: Product[] = [{ ...productTemplate, category: 'cate1' }, {...productTemplate, category: 'cate2'}];

      const productsFiltered = products.filter(product => service.filterByCategory(product));

      expect(productsFiltered).toEqual(products);
    });
  })

  describe('price Range Filter', () => {
    it('should filter by price range', () => {
      const products: Product[] = [{...productTemplate, price: 100}, {...productTemplate, price: 120}];
      const productsFiltered = products.filter(product => service.filterByPriceRange(product, [90, 110]));

      expect(productsFiltered).toEqual([{...productTemplate, price: 100}]);
    });

    it('should not filter when empty range', () => {
      const products: Product[] = [{...productTemplate, price: 100}, {...productTemplate, price: 120}];
      const productsFiltered = products.filter(product => service.filterByPriceRange(product));

      expect(productsFiltered).toEqual(products);
    })
  })
});
