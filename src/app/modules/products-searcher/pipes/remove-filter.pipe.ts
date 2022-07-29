import { Pipe, PipeTransform } from '@angular/core';
import { Filters } from '../interfaces/filters.interface';

@Pipe({
  name: 'removeFilter'
})
export class RemoveFilterPipe implements PipeTransform {

  transform(filters: Filters): Omit<Filters, 'title'> {
    return { categories: filters.categories, priceRange: filters.priceRange };
  }

}
