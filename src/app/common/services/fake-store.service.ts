import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {

  private baseUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param {number | flase} limit: number of products to get
   */
  getSomeProducts(limit: number | false = false) {
    let params: { limit?: number } = {};
    if (limit) params.limit = limit;

    return this.http.get<Product[]>(this.baseUrl+'/products', { params })
  }

  getOne(id: number) {
    return this.http.get<Product | null>(this.baseUrl+'/products/'+id)
  }
}
