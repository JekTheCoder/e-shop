import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemShopComponent } from './item-shop.component';

import { QuestionComponent } from '../question/question.component';
import { StarRatingComponent } from '@common/components/star-rating/star-rating.component';
import { NgLetDirective } from '@common/directives/ng-let.directive';

describe('ItemShopComponent', () => {
  let component: ItemShopComponent;
  let fixture: ComponentFixture<ItemShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemShopComponent, QuestionComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, NgLetDirective, StarRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemShopComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
