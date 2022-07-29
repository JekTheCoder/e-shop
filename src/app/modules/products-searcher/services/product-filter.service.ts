import { Injectable } from '@angular/core';
import { Product } from '@common/services/fake-store.service';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  constructor() { }

  filterByTitle(product: Product, title: string = ''): boolean {
    return product.title.includes(title.toLowerCase())
  }

  filterByCategory(product: Product, categories?: string[]): boolean {
    return (!categories || categories!.length === 0) || Boolean(categories!.find(category => product.category === category));
  }

  filterByPriceRange(product: Product, priceRange?: (number | null)[]): boolean {
    return !priceRange || (product.price >= (priceRange[0] || Number.NEGATIVE_INFINITY) && product.price <= (priceRange[1] || Number.POSITIVE_INFINITY))
  }
}
