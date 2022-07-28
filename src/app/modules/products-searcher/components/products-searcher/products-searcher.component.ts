import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-searcher',
  templateUrl: './products-searcher.component.html',
  styleUrls: ['./products-searcher.component.scss']
})
export class ProductsSearcherComponent implements OnInit {

  constructor(protected router: Router, protected route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  test(value: string) {
    console.log('recieved', value)
  }

  search(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { value }
    });
  }
}
