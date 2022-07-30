import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DarkThemeService } from '@common/services/dark-theme.service';
import { FakeStoreService, Product, Question } from '@common/services/fake-store.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.scss']
})
export class ItemShopComponent implements OnInit {

  product$?: Observable<Product | null>;
  questions$?: Observable<Question[]>;

  constructor(
    protected fs: FakeStoreService,
    protected route: ActivatedRoute,
    protected router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
       tap(params => {
          const idStr = params.get('itemId');
          if (!idStr) { this.router.navigate(['/notfound']); return }
          const id = Number(idStr);

          this.product$ = this.fs.getOne(id);
          this.questions$ = this.fs.getQuestions(id);
       })
    ).subscribe();
  }

}
