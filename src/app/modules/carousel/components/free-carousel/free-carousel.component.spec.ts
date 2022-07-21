import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCarouselComponent } from './free-carousel.component';

describe('FreeCarouselComponent', () => {
  let component: FreeCarouselComponent;
  let fixture: ComponentFixture<FreeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
