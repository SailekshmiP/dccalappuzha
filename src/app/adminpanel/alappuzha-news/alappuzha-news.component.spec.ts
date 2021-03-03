import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlappuzhaNewsComponent } from './alappuzha-news.component';

describe('AlappuzhaNewsComponent', () => {
  let component: AlappuzhaNewsComponent;
  let fixture: ComponentFixture<AlappuzhaNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlappuzhaNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlappuzhaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
