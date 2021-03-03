import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAlappuzhaComponent } from './my-alappuzha.component';

describe('MyAlappuzhaComponent', () => {
  let component: MyAlappuzhaComponent;
  let fixture: ComponentFixture<MyAlappuzhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAlappuzhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAlappuzhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
