import { AfterViewInit, Component, ContentChildren, HostListener, Input, OnDestroy, QueryList } from '@angular/core';
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
  @Input() delay: number | false = 5000;
  @Input() steps = 1
  
  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;
  
  @Input('itemsShowed') set itemShowedSetter(value: number) {
    this.itemsShowed = value;
    if (!this.afterInit) return;
    this.setItems();
  }

  itemsShowed = 1
  position = 0;

  private unsuscriber$ = new Subject<void>();
  private reset$ = new Subject<void>();
  private stop$ = new Subject<void>();
  private afterInit = false;

  constructor(private cn: CircularNumbersService, private itemPosSer: ItemPositionCalcService) {}

  ngAfterViewInit() {
    setTimeout(() => this.setItems(), 0)
    setTimeout(() => {
      if (this.delay) {
        this.reset$
          .pipe(
            startWith(0), 
            switchMap(
              () => interval(this.delay as number).pipe(takeUntil(this.stop$))
            )
          )
          .pipe(takeUntil(this.unsuscriber$))
          .subscribe(() => this.move(this.position+this.steps))  
      }
    }, 0)
    this.afterInit = true;
  }

  ngOnDestroy(): void {
      this.unsuscriber$.next();
      this.unsuscriber$.complete();
  }

  @HostListener('window:focus')
  refresh() {
    this.reset$.next()
  }

  @HostListener('window:blur') 
  windowBlur() {
    this.stop$.next()
  }

 setItems() {
    if (this.items.length < this.itemsShowed + 1) throw new Error('Not enougth items!')

    this.items.forEach((item, i) => { item.setWidth(1/this.itemsShowed); item.setPos(this.cn.normalize(i+this.position, this.items.length)) })
  } 

  private move(to: number) {
    to = this.cn.normalize(to, this.items.length);

    const minDiff = this.cn.minimunDifference(this.position, to, this.items.length);
    this.items.forEach((item, i) => {
      const [ to, passingBy, from ] = this.itemPosSer.calculatePosition(minDiff, this.position, i, this.items.length);
      item.move(to, passingBy, from)
    })

    this.position = to;
  }

  moveTo(to: number) {
    this.move(to);
    this.reset$.next()
  }

  next() {
    this.moveTo(this.position+this.steps)
    this.reset$.next()
  }

  previous() {
    this.moveTo(this.position-this.steps)
    this.reset$.next()
  }

}
