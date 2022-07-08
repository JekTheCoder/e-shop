import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsControllerComponent } from './chips-controller.component';

describe('ChipsControllerComponent', () => {
  let component: ChipsControllerComponent;
  let fixture: ComponentFixture<ChipsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
