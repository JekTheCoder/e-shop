import { Component } from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { animations } from '../carousel-item/carousel-item.component.animations';

@Component({
  selector: 'app-relative-carousel-item',
  template: '<ng-content></ng-content>',
  styleUrls: [
    '../carousel-item/carousel-item.component.scss',
    './relative-carousel-item.component.scss'],
  animations
})
export class RelativeCarouselItemComponent extends CarouselItemComponent {

  /**
   * 
   * @param percentage a number between 0 and 1
   */
  setWidth(percentage: number) {
    this.width = percentage * 100 + '%';
  }

}
