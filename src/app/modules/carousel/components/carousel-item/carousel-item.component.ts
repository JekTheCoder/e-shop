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
  state?: state = { value: 1, params: { from: 100, to: 100 } };

  constructor() { }

  ngOnInit(): void {}

  move(to: number, from: number) {
    to *= 100;
    from *= 100;

    this.state = {
      value: to/100,
      params: { from, to }
    }
  }

  in(from: number, to: number) {
    console.log(from, to)
    this.move(to, from)
  }

  out(to: number) {
    this.move(to, 0)
  }

  getPosition() {
    return this.state!.params['to']/100
  }

}
