import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeekshanamOnlineComponent } from './veekshanam-online.component';

describe('VeekshanamOnlineComponent', () => {
  let component: VeekshanamOnlineComponent;
  let fixture: ComponentFixture<VeekshanamOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeekshanamOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeekshanamOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
