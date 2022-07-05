import { Component, Input } from '@angular/core';
import { CustomCarouselComponent } from '../custom-carousel/custom-carousel.component';
import { animations } from './carousel.component.animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations
})
export class CarouselComponent extends CustomCarouselComponent {

  mouseIn: 'in' | 'out' = 'out';
  
}
