import { Injectable, OnDestroy } from '@angular/core';
import { audit, fromEvent, interval, ReplaySubject, Subject, takeUntil } from 'rxjs';

export enum WindowSize {
  small,
  medium, 
  large
}

export type WindowEvent = Event & { target: Window };

type windowParams = { [key in keyof typeof WindowSize]: number }

@Injectable({
  providedIn: 'root'
})
export class WindowSizeService implements OnDestroy {

  private unsuscriber$ = new Subject<void>()
  windowSize$ = new ReplaySubject<WindowSize>(1)

  windowSizes: windowParams = {
    small: 768,
    medium: 900,
    large: -1
  }

  constructor(private window: Window) { 
    fromEvent<WindowEvent>(this.window, 'resize')
    .pipe(takeUntil(this.unsuscriber$), audit(v => interval(1000)))
    .subscribe(e => this.detectWindowSize(e))

    setTimeout(() => this.window.dispatchEvent(new Event('resize')), 10)
  }

  private detectWindowSize(e: WindowEvent) {
    const windowWidth = e.target.innerWidth

    const sizes = Object.entries(this.windowSizes)
    const [keysize] = sizes.find(([key, value]) => value >= windowWidth) || sizes[sizes.length-1]

    const size = WindowSize[keysize as keyof typeof WindowSize]
    this.windowSize$.next(size)
  }
  
  ngOnDestroy(): void {
    this.unsuscriber$.next()
    this.unsuscriber$.complete()

    this.windowSize$.complete()
  }

}
