import { Component, } from '@angular/core';
import { Observable, } from 'rxjs';
import { CustomCarouselComponent } from '../custom-carousel/custom-carousel.component';
import { animations } from './carousel.component.animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations
})
export class CarouselComponent extends CustomCarouselComponent {

  buttonDisabled$?: Observable<boolean>;

  mouseIn: 'in' | 'out' = 'out';

  override afterInit(): void {
      super.afterInit()
      this.buttonDisabled$ = this.items.first.onTransition$
  }
}
