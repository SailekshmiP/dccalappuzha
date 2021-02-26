import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutussectionComponent } from './aboutussection.component';

describe('AboutussectionComponent', () => {
  let component: AboutussectionComponent;
  let fixture: ComponentFixture<AboutussectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutussectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutussectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
