import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {
  protected readonly itemKey = "isDarkThemed";

  protected darkThemed$ = new ReplaySubject<boolean>();

  constructor() {
    this.darkThemed$.next(this.detectBoleean(localStorage.getItem(this.itemKey)));
  }

  private detectBoleean(bool?: string | null): boolean {
    return bool === "true" ? true : false
  }

  setDarkTheme(darkTheme = true) {
    this.darkThemed$.next(darkTheme);
    localStorage.setItem(this.itemKey, darkTheme ? "true" : "false");
  }

  getObs() {
    return this.darkThemed$.asObservable();
  }
}
