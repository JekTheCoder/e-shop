import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DarkThemeService } from '@common/services/dark-theme.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'e-shop';

  darkThemeToggleControl = new FormControl(false, {nonNullable: true});
  initTheme$?: Observable<boolean>;
  darkThemed$?: Observable<boolean>;

  constructor(
    protected router: Router,
    protected darkTheme: DarkThemeService
  ) {}

  ngOnInit(): void {
    this.initTheme$ = this.darkTheme.getObs().pipe(take(1));
    this.darkThemed$ = this.darkTheme.getObs();
  }

  redirectToSearch(search: string) {
    this.router.navigate(['search'], { queryParams: { title: search } });
  }
}
