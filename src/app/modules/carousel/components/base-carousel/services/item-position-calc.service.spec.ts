import { TestBed } from '@angular/core/testing';

import { ItemPositionCalcService } from './item-position-calc.service';

describe('ItemPositionCalcService', () => {
  let service: ItemPositionCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemPositionCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calc a position', () => {
    const [ to, passingBy, from ] = service.calculatePosition(-1, 0, 3, 4);
    expect(to).toBe(0);
    expect(passingBy).toBe(0);
    expect(from).toBe(-1)
  })

  it('should calc another positon', () => {
    const [ to, passingBy, from ] = service.calculatePosition(-1, 0, 2, 4);
    expect(to).toBe(3);
    expect(passingBy).toBe(3);
    expect(from).toBe(2)
  })

  it('should calc a position with multiple moves', () => {
    const [ to, passingBy, from ] = service.calculatePosition(-2, 0, 5, 6);
    expect(to).toBe(1);
    expect(passingBy).toBe(1);
    expect(from).toBe(-1)
  })

  it('should calc a position with positive moves', () => {
    const [ to, passingBy, from ] = service.calculatePosition(1, 0, 0, 4);
    expect(to).toBe(3);
    expect(passingBy).toBe(-1);
    expect(from).toBe(0)
  })

  it('should calc a position having a chagned initial postion', () => {
    const [ to, passingBy, from ] = service.calculatePosition(1, 1, 0, 4);
    expect(to).toBe(2);
    expect(passingBy).toBe(2);
    expect(from).toBe(3)
  })
});
