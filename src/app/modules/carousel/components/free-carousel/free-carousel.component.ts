import { Component } from '@angular/core';
import { BaseCarouselComponent } from '../base-carousel/base-carousel.component';

@Component({
  selector: 'app-free-carousel',
  templateUrl: './free-carousel.component.html',
  styleUrls: ['./free-carousel.component.scss']
})
export class FreeCarouselComponent extends BaseCarouselComponent {

  protected setItemsPosition(): void {
    this.items.forEach((item, i) => item.setPos(this.cn.normalize(i + this.position, this.items.length)))
  }

  /**
   * 
   * @param {number} width pixels to fit the items
   */
  setItemsWidth(width: number) {
    this.items.forEach(item => item.width = width + 'px');
  }

}
