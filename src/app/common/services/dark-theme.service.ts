import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {
  protected readonly itemKey = "isDarkThemed";

  protected darkThemed$ = new ReplaySubject<boolean>();
  protected renderer = inject(RendererFactory2).createRenderer(null, null);

  constructor() {
    this.darkThemed$.next(this.detectBoleean(localStorage.getItem(this.itemKey)));
  }

  private detectBoleean(bool?: string | null): boolean {
    return bool === "true" ? true : false
  }

  setDarkTheme(darkTheme = true) {
    
    darkTheme ?
    this.renderer.addClass(document.body, 'dark-theme') :
    this.renderer.removeClass(document.body, 'dark-theme');

    this.darkThemed$.next(darkTheme);
    localStorage.setItem(this.itemKey, darkTheme ? "true" : "false");
  }

  getObs() {
    return this.darkThemed$.asObservable();
  }
}
