import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-shop';

  constructor(protected router: Router) {}

  redirectToSearch(search: string) {
    this.router.navigate(['search'], { queryParams: { title: search } });
  }
}
