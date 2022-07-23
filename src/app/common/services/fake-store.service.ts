import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

export interface Answer {
  id: number
  user: string,
  date: Date,
  content: string
}

export interface Question extends Answer {
  answers: Answer[]
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

  getQuestions(productId: number): Observable<Question[]> {
    return of([
      {
        id: 1,
        user: 'user1',
        date: new Date(),
        content: 'lorem',
        answers: []
      },
      {
        id: 2,
        user: 'user2',
        date: new Date(),
        content: 'ipsum',
        answers: [{
          id: 5,
          user: 'user4',
          date: new Date(),
          content: 'kkdvk'
        }]
      },
      {
        id: 3,
        user: 'user3',
        date: new Date(),
        content: 'latin',
        answers: []
      }
    ])
  }
}
