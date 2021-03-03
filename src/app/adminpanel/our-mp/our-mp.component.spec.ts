import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMpComponent } from './our-mp.component';

describe('OurMpComponent', () => {
  let component: OurMpComponent;
  let fixture: ComponentFixture<OurMpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurMpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
