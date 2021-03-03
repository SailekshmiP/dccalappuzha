import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBacksComponent } from './feed-backs.component';

describe('FeedBacksComponent', () => {
  let component: FeedBacksComponent;
  let fixture: ComponentFixture<FeedBacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedBacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
