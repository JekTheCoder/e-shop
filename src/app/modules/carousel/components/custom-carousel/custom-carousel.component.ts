import { AfterViewInit, Component, ContentChildren, Input, OnDestroy, QueryList } from '@angular/core';
import { interval, Observable, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements AfterViewInit, OnDestroy {
  @Input() delay: number | false = 5000;
  @Input() itemsShowed = 1;
  @Input() steps = 1

  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;
  
  private position = 0;

  private unsuscriber$ = new Subject<void>();
  private reset$ = new Subject<void>()
  private interval$?: Observable<number>;


  ngAfterViewInit() {
    setTimeout(() => this.afterInit(), 0)
  }

  ngOnDestroy(): void {
      this.unsuscriber$.next();
      this.unsuscriber$.complete();
  }

 afterInit() {
    if (this.items.length < 2) throw new Error('la wea cuantica')

    this.items.first.in(0, 0)

    if (this.delay) {
      this.interval$ = this.reset$.pipe(startWith(0), switchMap(() => interval(this.delay as number)))
      
      this.interval$
      .pipe(takeUntil(this.unsuscriber$))
      .subscribe(() => this.move(-1))
    }
      
  } 

  move(side: number) {
    this.items.get(this.position)?.out(side)
    this.position = this.sum(this.position, -side, this.items.length);
    this.items.get(this.position)?.in(-side, 0)
  }

  // move_(to: number) {
  //   to = this.sum(to, 0, this.items.length);

  //   const moves = to - this.position;
  // }

  next() {
    this.move(-1)
    this.reset$.next()
  }

  previous() {
    this.move(1)
    this.reset$.next()
  }   

  protected sum(value: number, add: number, max: number) {
    return (value + max + add) % max
  }
}
