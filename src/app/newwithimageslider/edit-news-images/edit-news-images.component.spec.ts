import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsImagesComponent } from './edit-news-images.component';

describe('EditNewsImagesComponent', () => {
  let component: EditNewsImagesComponent;
  let fixture: ComponentFixture<EditNewsImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewsImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
