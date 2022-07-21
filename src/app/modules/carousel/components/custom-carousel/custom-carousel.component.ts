import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { BaseCarouselComponent } from '../base-carousel/base-carousel.component';
import { RelativeCarouselItemComponent } from '../relative-carousel-item/relative-carousel-item.component';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent extends BaseCarouselComponent {

  @ContentChildren(RelativeCarouselItemComponent)
  override items!: QueryList<RelativeCarouselItemComponent>;
  
  @Input('itemsShowed') set itemShowedSetter(value: number) {
    this.itemsShowed = value;
    if (!this.afterInit) return;
    this.setItemsPosition();
  }
  
  itemsShowed = 1
  protected afterInit = false;
  
  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.afterInit = true;
  }

 setItemsPosition() {
    this.checkItems();

    this.items.forEach((item, i) => { item.setWidth(1/this.itemsShowed); item.setPosition(this.cn.normalize(i+this.position, this.items.length)) })
  } 

  protected override checkItems(): void {
    if (this.items.length < this.itemsShowed + 1) throw new Error('Not enougth items!');
  }

}
