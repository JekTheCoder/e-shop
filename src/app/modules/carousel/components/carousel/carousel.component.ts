import { AfterViewInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { animations } from './carousel.component.animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;

  mouseIn: 'in' | 'out' = 'out';
  position = 0;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.items.first.in(0, 0)
    }, 0)
  }

  ngOnInit(): void {}

  next() {
    this.move(-1)
  }

  previous() {
    this.move(1)
  }

  private move(multiplier: number) {
    this.items.get(this.position)?.out(multiplier)
    this.position = this.sum(this.position, -multiplier, this.items.length);
    this.items.get(this.position)?.in(-multiplier, 0)
  }

  private sum(value: number, add: number, max: number) {
    return (value + max + add) % max
  }
}
