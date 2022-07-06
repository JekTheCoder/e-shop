import { Component, HostBinding, OnInit } from '@angular/core';
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
export class CarouselItemComponent implements OnInit {

  @HostBinding('@move')
  state?: state = { value: 0, params: { passingBy: 0, to: 0 } };

  constructor() { }

  ngOnInit(): void {}

  move(to: number, passingBy: number) {
    to *= 100;
    passingBy *= 100;

    this.state = {
      value: to/100,
      params: { passingBy, to }
    }
  }

  in(from: number, to: number) {
    this.move(to, from)
  }

  out(to: number) {
    this.move(to, 0)
  }

  getPosition() {
    return this.state?.value as number
  }

}
