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
  answers: Answer[],
  votes: number
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

    return this.http.get<Product[]>(this.baseUrl + '/products', { params })
  }

  getOne(id: number) {
    return this.http.get<Product | null>(this.baseUrl + '/products/' + id)
  }

  getQuestions(productId: number): Observable<Question[]> {
    return of([
      {
        id: 1,
        user: 'user1',
        date: new Date(),
        content: 'Its morbin time!',
        answers: [
          {
            id: 3,
            user: 'user3',
            date: new Date(),
            content: 'NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'
          }
        ],
        votes: 0
      },
      {
        id: 2,
        user: 'user2',
        date: new Date(),
        content: 'Why i cant buy it?',
        votes: 0,
        answers: [
          {
            id: 5,
            user: 'user4',
            date: new Date(),
            content: 'I dont know'
          },
          {
            id: 6,
            user: 'user1',
            date: new Date(),
            content: 'Are u interested on nft? Buy my merch and book wich teachs how to exactly become a nft hero!'
          }
        ]
      },
      {
        id: 3,
        user: 'user3',
        date: new Date(),
        content: 'latin',
        votes: 0,
        answers: []
      }
    ])
  }

  rateQuestion(id: number, rate: boolean): Observable<{ response: boolean, votes: number }> {
    return of({ response: true, votes: Math.floor(Math.random()*200) });
  }
}
