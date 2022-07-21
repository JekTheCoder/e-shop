import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RelativeCarouselItemComponent } from './relative-carousel-item.component';

describe('RelativeCarouselItemComponent', () => {
  let component: RelativeCarouselItemComponent;
  let fixture: ComponentFixture<RelativeCarouselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelativeCarouselItemComponent],
      imports: [BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RelativeCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
