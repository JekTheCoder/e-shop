import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

import { CustomCarouselComponent } from './custom-carousel.component';

function delay(ms: number = 0) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

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

  it('should show an item', async () => {
    await initializate(2);
    
    const firstItem = fixture.debugElement.query(By.css('app-carousel-item')).componentInstance as CarouselItemComponent
    spyOn(firstItem, 'in').and.callThrough()
    fixture.detectChanges();
    await delay()

    expect(firstItem.in).toHaveBeenCalledOnceWith(0, 0)
    expect(firstItem.getPosition()).toBe(0)
  })

  it('should move the items using next, correctly', async () => {
    await initializate(2);

    const [ first, second ] = fixture.debugElement.queryAll(By.css('app-carousel-item')).map(node => node.componentInstance as CarouselItemComponent)
    fixture.detectChanges();
    await delay()

    component.next()
    
    expect(first.getPosition()).not.toBe(0)
    expect(second.getPosition()).toBe(0)
  })

  it('should move the items correctly', async () => {
    await initializate(4);

    const [ first, second, third, fourth ] = fixture.debugElement.queryAll(By.css('app-carousel-item')).map(node => node.componentInstance as CarouselItemComponent)
    fixture.detectChanges();
    await delay()

    component.move(-1)
    expect(first.getPosition()).not.toBe(0)
    expect(second.getPosition()).toBe(0)
  })

  it('should move its items past an interval', async () => {
    await initializate(2);

    const [ first, second ] = fixture.debugElement.queryAll(By.css('app-carousel-item')).map(node => node.componentInstance as CarouselItemComponent)

    component.delay = 500;
    fixture.detectChanges();
    await delay(600)

    expect(first.getPosition()).not.toBe(0)
    expect(second.getPosition()).toBe(0)
    component.ngOnDestroy()
    fixture.destroy()
  })
});
