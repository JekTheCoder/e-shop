import { Component, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { animations } from './carousel-item.component.animations';

interface state {
  value: unknown,
  params: { [key:string]:number }
}

@Component({
  selector: 'app-carousel-item',
  template: '<ng-content></ng-content>',
  styleUrls: ['./carousel-item.component.scss'],
  animations
})
export class CarouselItemComponent implements OnInit, OnDestroy {

  @HostBinding('@move')
  state?: state = { value: 0, params: { passingBy: 0, to: 0, from: 0 } };

  @HostBinding('style.width')
  width: string = '100%';

  onTransition$ = new Subject<boolean>();

  @HostListener('@move.start')
  animInit() { this.onTransition$.next(true) }

  @HostListener('@move.done')
  animEnd() { this.onTransition$.next(false) }

  constructor() { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
      this.onTransition$.complete();
  }

  move(to: number, passingBy: number, from: number) {
    to *= 100;
    passingBy *= 100;
    from *= 100;

    this.state = {
      value: to/100,
      params: { passingBy, to, from }
    }
  }

  setPos(x: number) {
    x *= 100;
    this.state = {
      value: x/100,
      params: {
        to: x,
        from: x,
        passingBy: x
      }
    }
  }

  getPosition() {
    return this.state?.value as number
  }

  /**
  * @param {number} proportion: a number between 0 and 1
  */
  setWidth(proportion: number) {
    this.width = proportion*100 + '%';
  }

}
