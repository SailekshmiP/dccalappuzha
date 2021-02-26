import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurInspirationComponent } from './our-inspiration.component';

describe('OurInspirationComponent', () => {
  let component: OurInspirationComponent;
  let fixture: ComponentFixture<OurInspirationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurInspirationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurInspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
