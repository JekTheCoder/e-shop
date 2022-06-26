import { AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { BaseCarouselComponent } from '../base-carousel/base-carousel.component';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { animations } from './carousel.component.animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations
})
export class CarouselComponent extends BaseCarouselComponent implements OnInit {

  mouseIn: 'in' | 'out' = 'out';

  next() {
    this.move(-1)
  }

  previous() {
    this.move(1)
  }
}
