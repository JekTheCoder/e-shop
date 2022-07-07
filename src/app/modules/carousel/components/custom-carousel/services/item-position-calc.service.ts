import { Injectable } from '@angular/core';
import { CircularNumbersService } from '@carousel/services/circular-numbers.service';

@Injectable({
  providedIn: 'root'
})
export class ItemPositionCalcService {

  constructor(private cn: CircularNumbersService) { }

  calculatePosition(minDiff: number, position: number, index: number, max: number) {
    const cps = this.cn.normalize(index - position, max)

    const from = this.inRange(cps, max, minDiff) ? cps - max : cps;
    const passingBy = from - minDiff;
    const to = this.cn.normalize(passingBy, max);

    return [ to, passingBy, from ]
  }

  inRange(number: number, n1: number, n2: number) {
    n2 += n1;
    return (
      n1 > n2 ?
      number < n1 && number >= n2 : 
      number > n1 && number <= n2
    );
  }
}
