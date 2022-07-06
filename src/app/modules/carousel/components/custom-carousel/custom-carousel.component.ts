import { AfterViewInit, Component, ContentChildren, Input, OnDestroy, QueryList } from '@angular/core';
import { CircularNumbersService } from '@carousel/services/circular-numbers.service';
import { interval, min, Observable, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements AfterViewInit, OnDestroy {
  @Input() delay: number | false = false;
  @Input() itemsShowed = 1;
  @Input() steps = 1

  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;
  
  private position = 0;

  private unsuscriber$ = new Subject<void>();
  private reset$ = new Subject<void>()
  private interval$?: Observable<number>;

  constructor(private cn: CircularNumbersService) {}

  ngAfterViewInit() {
    setTimeout(() => this.afterInit(), 0)
  }

  ngOnDestroy(): void {
      this.unsuscriber$.next();
      this.unsuscriber$.complete();
  }

 afterInit() {
    if (this.items.length < 2) throw new Error('la wea cuantica')

    this.items.forEach((item, i) => item.move(i, i))

    if (this.delay) {
      this.interval$ = this.reset$.pipe(startWith(0), switchMap(() => interval(this.delay as number)))
      
      this.interval$
      .pipe(takeUntil(this.unsuscriber$))
      .subscribe(() => this.move(-1))
    }
      
  } 

  move(side: number) {
    this.items.get(this.position)?.out(side)
    this.position = this.cn.sum(this.position, -side, this.items.length);
    this.items.get(this.position)?.in(-side, 0)
  }

  moveTo(to: number) {
    to = this.cn.normalize(to, this.items.length);

    const minDiff = this.cn.minimunDifference(this.position, to, this.items.length);
    this.items.forEach(item => {
      const newPos = item.getPosition() - minDiff;
      
      item.move(this.cn.normalize(newPos, this.items.length), newPos)
    })

    this.position = to;
  }

  next() {
    this.moveTo(this.position+1)
    this.reset$.next()
  }

  previous() {
    this.move(1)
    this.reset$.next()
  }   

}
