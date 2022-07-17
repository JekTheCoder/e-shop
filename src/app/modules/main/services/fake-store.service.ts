import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Product {
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
   * @param {number} products: number of products to get
   */
  getSomeProducts(products: number) {
    return this.http.get<Product[]>(this.baseUrl+'/products')
  }
}
