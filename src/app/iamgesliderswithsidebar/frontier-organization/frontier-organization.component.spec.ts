import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontierOrganizationComponent } from './frontier-organization.component';

describe('FrontierOrganizationComponent', () => {
  let component: FrontierOrganizationComponent;
  let fixture: ComponentFixture<FrontierOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontierOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontierOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
