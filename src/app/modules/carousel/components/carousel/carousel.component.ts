import {AfterViewInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

interface Image {
  src: string,
  alt?: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;

  position = 0;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.items.first.setPosition(0)
    }, 0)
  }

  ngOnInit(): void {
      
  }

  refresh() {}

  next() {
    this.move(-1)
  }

  previous() {
    this.move(1)
  }

  private move(multiplier: number) {
    this.items.get(this.position)?.out(multiplier)
    this.position = this.sum(this.position, multiplier, this.items.length);
    this.items.get(this.position)?.in(-multiplier, 0)
  }

  private sum(value: number, add: number, max: number) {
    return (value + max + add) % max
  }
}
