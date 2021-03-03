import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNavigationComponent } from './add-navigation.component';

describe('AddNavigationComponent', () => {
  let component: AddNavigationComponent;
  let fixture: ComponentFixture<AddNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
