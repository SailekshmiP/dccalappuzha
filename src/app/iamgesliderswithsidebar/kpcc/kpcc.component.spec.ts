import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpccComponent } from './kpcc.component';

describe('KpccComponent', () => {
  let component: KpccComponent;
  let fixture: ComponentFixture<KpccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
