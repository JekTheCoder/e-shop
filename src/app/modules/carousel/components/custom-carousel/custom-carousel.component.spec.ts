import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

import { CustomCarouselComponent } from './custom-carousel.component';

function generateTestComponent(items: number) {
  let itemsStr = '';
  for (let i = 1; i <= items; i++) itemsStr += `<app-carousel-item>${i}</app-carousel-item>`

  @Component({
    template: `
      <app-custom-carousel>
        ${itemsStr}
      </app-custom-carousel>
      `
  })
  class TestComponent {}

  return TestComponent
}

describe('CustomCarouselComponent', () => {
  let component: CustomCarouselComponent;
  let TestComponent: ReturnType<typeof generateTestComponent>;
  let fixture: ComponentFixture<InstanceType<typeof TestComponent>>;
  

  const initializate = async (items: number) => {
    TestComponent = generateTestComponent(items)

    await TestBed.configureTestingModule({
      declarations: [ TestComponent, CustomCarouselComponent, CarouselItemComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement.children[0].componentInstance;
    
  }
  
  it('should create', async () => {
    await initializate(1) 

    expect(component).toBeTruthy();//
  });

  it('should be prepared to recieve none', async () => {
    await initializate(0);
    
    expect(() => component['afterInit']()).toThrowError()
  })

  it('should show a item', async () => {
    await initializate(2);
    
    const firstItem = fixture.debugElement.query(By.css('app-carousel-item')).componentInstance as CarouselItemComponent
    spyOn(firstItem, 'in').and.callThrough()
    fixture.detectChanges();

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(firstItem.in).toHaveBeenCalledOnceWith(0, 0)
    expect(firstItem.getPosition()).toBe(0)
  })
});
