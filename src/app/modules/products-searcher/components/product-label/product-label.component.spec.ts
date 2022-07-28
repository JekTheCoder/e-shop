import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLabelComponent } from './product-label.component';

describe('ProductLabelComponent', () => {
  let component: ProductLabelComponent;
  let fixture: ComponentFixture<ProductLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLabelComponent);
    component = fixture.componentInstance;

    component.product = {
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      rating: {
        count: 0,
        rate: 0
      }
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
