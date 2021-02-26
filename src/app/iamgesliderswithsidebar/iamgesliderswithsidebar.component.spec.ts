import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IamgesliderswithsidebarComponent } from './iamgesliderswithsidebar.component';

describe('IamgesliderswithsidebarComponent', () => {
  let component: IamgesliderswithsidebarComponent;
  let fixture: ComponentFixture<IamgesliderswithsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IamgesliderswithsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IamgesliderswithsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
