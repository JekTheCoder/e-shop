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
  pos?: { value: 'position', params: { pos: number } };

  @HostBinding('style.transform')
  rawTransform: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  animatePosition(position: number) {
    this.pos = {
      value: 'position',
      params: { pos: position*100 }
    }
  }

  setPosition(position: number) {
    this.rawTransform = `translateX(${position*100}%)`
  }

}
