import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMlaComponent } from './our-mla.component';

describe('OurMlaComponent', () => {
  let component: OurMlaComponent;
  let fixture: ComponentFixture<OurMlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurMlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
