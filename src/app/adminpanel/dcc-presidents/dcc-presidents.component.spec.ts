import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DccPresidentsComponent } from './dcc-presidents.component';

describe('DccPresidentsComponent', () => {
  let component: DccPresidentsComponent;
  let fixture: ComponentFixture<DccPresidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DccPresidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DccPresidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
