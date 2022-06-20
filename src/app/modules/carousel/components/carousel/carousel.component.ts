import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

interface Image {
  src: string,
  alt?: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  
  @Input()
  images!: Image[]

  // @ContentChild('list') items?: ElementRef

  @ViewChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;
  currentPosition = 0;
  translationCompleted = true;

  constructor() { 
  }

  ngOnInit(): void {
    if (!this.images) throw new TypeError('images Input is required')
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.items.forEach((items, i) => items.setPosition(i))
    }, 0);
  }

  previus() {
    if (!this.translationCompleted) return;
    this.translationCompleted = false;
    setTimeout(() => this.translationCompleted = true, 5000)


    this.getLast()?.setPosition(-1)

    this.currentPosition = this.sum(this.currentPosition, 1, this.items.length)
    this.items.forEach((item, i) => item.animatePosition(this.sum(this.currentPosition, i, this.items.length)))
  }

  next() {
    if (!this.translationCompleted) return;
    this.translationCompleted = false;
    setTimeout(() => this.translationCompleted = true, 5000)

    this.getLast()?.setPosition(this.items.length)

    this.currentPosition = this.sum(this.currentPosition, -1, this.items.length)
    // this.items.forEach((item, i) => item.animatePosition(this.sum(this.currentPosition, i, this.items.length)))

  }

  updatePositions() {
    this.items.forEach((item, i) => item.setPosition)
  }

  private getLast() {
    return this.items.get(this.sum(this.currentPosition, -1, this.items.length))
  }

  private sum(value: number, sum: number, max: number) {
    return (value + max + sum) % max
  }

  refresh() {
    console.log(0)
  }
}
