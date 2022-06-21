import { Component, HostBinding, OnInit } from '@angular/core';
import { animations } from './carousel-item.component.animations';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
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

  @HostBinding('style.transform')
  rawTransform: string = '';

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

  setPosition(position: number) {
    this.rawTransform = `translateX(${position*100}%)`
  }

}
