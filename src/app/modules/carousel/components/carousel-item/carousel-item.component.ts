import { Component, HostBinding, OnInit } from '@angular/core';
import { animations } from './carousel-item.component.animations';

@Component({
  selector: 'app-carousel-item',
  template: '<ng-content></ng-content>',
  styleUrls: ['./carousel-item.component.scss'],
  animations
})
export class CarouselItemComponent implements OnInit {

  @HostBinding('@move')
  state: {
    value: 'in' | 'out',
    params: any
  } = {
    value: 'out',
    params: { to: 100, from: 0 }
  }

  constructor() { }

  ngOnInit(): void {
  }

  in(from: number, to: number) {
    this.state = {
      value: 'in',
      params: { from: from*100, to: to*100 }
    }
  }

  out(to: number) {
    this.state = {
      value: 'out',
      params: { to: to*100 }
    }
  }

  getPosition() {
    return this.state.params.to/100
  }

}
