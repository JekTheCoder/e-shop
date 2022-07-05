import { AfterViewInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { interval, Observable, Subject, switchMap } from 'rxjs';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements AfterViewInit {
  @Input() delay: number | false = 5000;
  @Input() itemsShowed = 1;
  @Input() steps = 1

  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;

  private position = 0;
  private position$ = new Subject<number>()
  private interval$?: Observable<number>;


  ngAfterViewInit() {
    setTimeout(() => this.afterInit(), 0)
  }

 afterInit() {
    if (this.items.length < 2) throw new Error('la wea cuantica')
    
    this.items.first.in(0, 0)

    if (this.delay)
      this.interval$ = this.position$.pipe(switchMap(() => interval(this.delay as number)))
  } 

  protected move(side: number) {

    this.items.get(this.position)?.out(side)
    this.position = this.sum(this.position, -side, this.items.length);
    this.items.get(this.position)?.in(-side, 0)

    
  }

  protected sum(value: number, add: number, max: number) {
    return (value + max + add) % max
  }

  next() {
    this.move(-1)
  }

  previous() {
    this.move(1)
  }   
}
