import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartyrsComponent } from './martyrs.component';

describe('MartyrsComponent', () => {
  let component: MartyrsComponent;
  let fixture: ComponentFixture<MartyrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartyrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartyrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
