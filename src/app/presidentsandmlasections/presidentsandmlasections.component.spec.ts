import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentsandmlasectionsComponent } from './presidentsandmlasections.component';

describe('PresidentsandmlasectionsComponent', () => {
  let component: PresidentsandmlasectionsComponent;
  let fixture: ComponentFixture<PresidentsandmlasectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentsandmlasectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentsandmlasectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
