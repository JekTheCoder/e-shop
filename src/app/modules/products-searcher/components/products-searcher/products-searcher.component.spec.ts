import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSearcherComponent } from './products-searcher.component';

describe('ProductsSearcherComponent', () => {
  let component: ProductsSearcherComponent;
  let fixture: ComponentFixture<ProductsSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
