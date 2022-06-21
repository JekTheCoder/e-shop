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
      this.items.forEach((item, i) => item.setPosition(i))
      this.items.last.setPosition(-1)
    }, 501)
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
    const before = this.sum(this.position, -1, this.items.length)
    this.items.get(before)?.setPosition(this.items.length - 1)

    
    this.items.forEach((item, i) => {
      const value = this.sum(this.position, multiplier*(i-1), this.items.length)
      item.animatePosition(value, value+multiplier)
    })
    this.position = this.sum(this.position, 1, this.items.length)
  }

  private sum(value: number, add: number, max: number) {
    return (value + max + add) % max
  }
}
