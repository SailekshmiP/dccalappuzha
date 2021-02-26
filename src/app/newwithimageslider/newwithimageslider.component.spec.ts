import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewwithimagesliderComponent } from './newwithimageslider.component';

describe('NewwithimagesliderComponent', () => {
  let component: NewwithimagesliderComponent;
  let fixture: ComponentFixture<NewwithimagesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewwithimagesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewwithimagesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
