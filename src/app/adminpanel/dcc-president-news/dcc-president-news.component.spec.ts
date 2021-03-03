import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DccPresidentNewsComponent } from './dcc-president-news.component';

describe('DccPresidentNewsComponent', () => {
  let component: DccPresidentNewsComponent;
  let fixture: ComponentFixture<DccPresidentNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DccPresidentNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DccPresidentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
