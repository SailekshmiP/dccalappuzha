import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongressSandeshComponent } from './congress-sandesh.component';

describe('CongressSandeshComponent', () => {
  let component: CongressSandeshComponent;
  let fixture: ComponentFixture<CongressSandeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongressSandeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongressSandeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
