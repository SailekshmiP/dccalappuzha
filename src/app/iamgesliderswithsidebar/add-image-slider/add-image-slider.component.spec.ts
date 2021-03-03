import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageSliderComponent } from './add-image-slider.component';

describe('AddImageSliderComponent', () => {
  let component: AddImageSliderComponent;
  let fixture: ComponentFixture<AddImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
