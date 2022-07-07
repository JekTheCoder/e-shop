import { AfterViewInit, Component, ContentChildren, Input, OnDestroy, QueryList } from '@angular/core';
import { CircularNumbersService } from '@carousel/services/circular-numbers.service';
import { interval, Observable, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { ItemPositionCalcService } from './services/item-position-calc.service';

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

  constructor(private cn: CircularNumbersService, private itemPosSer: ItemPositionCalcService) {}

  ngAfterViewInit() {
    setTimeout(() => this.afterInit(), 0)
  }

  ngOnDestroy(): void {
      this.unsuscriber$.next();
      this.unsuscriber$.complete();
  }

 afterInit() {
    if (this.items.length < 2) throw new Error('la wea cuantica')

    this.items.forEach((item, i) => item.setPos(i))

    if (this.delay) {
      this.interval$ = this.reset$.pipe(startWith(0), switchMap(() => interval(this.delay as number)))
      
      this.interval$
      .pipe(takeUntil(this.unsuscriber$))
      .subscribe(() => this.moveTo(this.position-1))
    }
      
  } 

  moveTo(to: number) {
    to = this.cn.normalize(to, this.items.length);

    const minDiff = this.cn.minimunDifference(this.position, to, this.items.length);
    this.items.forEach((item, i) => {
      const [ to, passingBy, from ] = this.itemPosSer.calculatePosition(minDiff, this.position, i, this.items.length);
      item.move(to, passingBy, from)
    })

    this.position = to;
  }

  next() {
    this.moveTo(this.position+1)
    this.reset$.next()
  }

  previous() {
    this.moveTo(this.position-1)
  }   

}
