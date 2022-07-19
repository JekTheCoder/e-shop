import { AfterViewInit, Component, ContentChildren, HostListener, Input, OnDestroy, QueryList } from '@angular/core';
import { CircularNumbersService } from '@carousel/services/circular-numbers.service';
import { interval, Observable, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { ItemPositionCalcService } from './services/item-position-calc.service';
import { Timer } from './services/timer.injectable';

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

  private timer?: Timer; 

  private unsuscriber$ = new Subject<void>();
  private afterInit = false;

  constructor(private cn: CircularNumbersService, private itemPosSer: ItemPositionCalcService) {}

  ngAfterViewInit() {
    setTimeout(() => this.setItems(), 0)
    setTimeout(() => {
      if (this.delay) {
        this.timer = new Timer(this.delay as number);
        this.timer.timer$.pipe(takeUntil(this.unsuscriber$)).subscribe(() => this.moveTo(this.position + this.steps))
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
    this.timer?.reset();
  }

  @HostListener('window:blur') 
  windowBlur() {
    this.timer?.stop();
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
    this.timer?.reset();
  }

  next() {
    this.moveTo(this.position+this.steps)
    this.timer?.reset();
  }

  previous() {
    this.moveTo(this.position-this.steps)
    this.timer?.reset();
  }

}
