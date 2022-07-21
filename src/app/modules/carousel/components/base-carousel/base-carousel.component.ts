import { Component, ContentChildren, HostListener, Input, QueryList } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { CircularNumbersService } from '@carousel/services/circular-numbers.service';
import { ItemPositionCalcService } from './services/item-position-calc.service';
import { Timer } from './services/timer.injectable';

@Component({
  selector: 'app-base-carousel',
  templateUrl: './base-carousel.component.html',
  styleUrls: ['./base-carousel.component.scss']
})
export abstract class BaseCarouselComponent {

  @Input('position') set positionSetter(value: number) {
    this.moveTo(value);
  }
  @Input() delay: number | false = 5000;
  @Input() steps = 1

  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;

  protected timer?: Timer;
  protected unsuscriber$ = new Subject<void>();

  protected position = 0;

  constructor(protected cn: CircularNumbersService, protected ipc: ItemPositionCalcService) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.items.changes.subscribe(() => this.checkItems());
      this.setItemsPosition()

      if (this.delay) {
        this.timer = new Timer(this.delay as number);
        this.timer.timer$
          .pipe(takeUntil(this.unsuscriber$))
          .subscribe(() => this.moveTo(this.position + this.steps))
      }
    }, 0)
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
  stop() {
    this.timer?.stop();
  }

  protected checkItems() {
    if (this.items.length < 2) throw new TypeError("Not enough items");
  }

  protected abstract setItemsPosition(): void;

  protected move(to: number) {
    to = this.cn.normalize(to, this.items.length);

    const minDiff = this.cn.minimunDifference(this.position, to, this.items.length);
    this.items.forEach((item, i) => {
      const [to, passingBy, from] = this.ipc.calculatePosition(minDiff, this.position, i, this.items.length);
      item.move(to, passingBy, from)
    })

    this.position = to;
  }

  moveTo(to: number) {
    this.move(to);
    this.timer?.reset();
  }

  next() {
    this.moveTo(this.position + this.steps)
    this.timer?.reset();
  }

  previous() {
    this.moveTo(this.position - this.steps)
    this.timer?.reset();
  }

}
