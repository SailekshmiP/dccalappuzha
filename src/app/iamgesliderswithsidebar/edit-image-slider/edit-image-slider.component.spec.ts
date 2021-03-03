import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImageSliderComponent } from './edit-image-slider.component';

describe('EditImageSliderComponent', () => {
  let component: EditImageSliderComponent;
  let fixture: ComponentFixture<EditImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
