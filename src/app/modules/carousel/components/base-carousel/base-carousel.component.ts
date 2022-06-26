import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'app-base-carousel',
  template: ''
})
export abstract class BaseCarouselComponent implements OnInit {

  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;

  position = 0;
  itemsShowed = 1;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.items.first.in(0, 0)
    }, 0)
  }

  protected move(side: number) {
    this.items.get(this.position)?.out(side)
    this.position = this.sum(this.position, -side, this.items.length);
    this.items.get(this.position)?.in(-side, 0)
  }

  protected sum(value: number, add: number, max: number) {
    return (value + max + add) % max
  }
}
