import { Component, HostBinding, HostListener, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { animations } from './carousel-item.component.animations';

export interface state {
  value: unknown,
  params: { [key: string]: number }
}

@Component({
  selector: 'app-carousel-item',
  template: '<ng-content></ng-content>',
  styleUrls: ['./carousel-item.component.scss'],
  animations
})
export class CarouselItemComponent implements OnDestroy {

  @HostBinding('@move')
  state?: state = { value: 0, params: { passingBy: 0, to: 0, from: 0 } };

  @HostBinding('style.width')
  width: string = '';

  onTransition$ = new Subject<boolean>();

  @HostListener('@move.start')
  animInit() { this.onTransition$.next(true) }

  @HostListener('@move.done')
  animEnd() { this.onTransition$.next(false) }

  ngOnDestroy(): void {
    this.onTransition$.complete();
  }

  move(to: number, passingBy: number, from: number) {
    to *= 100;
    passingBy *= 100;
    from *= 100;

    this.state = {
      value: to / 100,
      params: { passingBy, to, from }
    }
  }

  setPosition(position: number) {
    this.move(position, position, position);
  }

  getPosition() {
    return this.state?.value as number
  }

}
