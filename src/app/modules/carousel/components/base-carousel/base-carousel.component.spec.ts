import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCarouselComponent } from './base-carousel.component';

@Component({template: ''})
class TestCarouselComponent extends BaseCarouselComponent {}

describe('BaseCarouselComponent', () => {
  let component: TestCarouselComponent;
  let fixture: ComponentFixture<TestCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
