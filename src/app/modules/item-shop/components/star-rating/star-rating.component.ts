import { Component, Input, OnInit } from '@angular/core';

/**
 * @property {number} points - Scale between 0 and 5 stars. Admits decimals
 */
@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {

  @Input('points') set pointsSetter(points: number) {
    if (points < 0 || points > 5) 
      throw new Error('points should be between 0 and 5');
    this.points = points; 
  }
  protected points!: number;

  @Input() count: number = 0;

}