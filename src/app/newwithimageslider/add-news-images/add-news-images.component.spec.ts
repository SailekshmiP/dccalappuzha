import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsImagesComponent } from './add-news-images.component';

describe('AddNewsImagesComponent', () => {
  let component: AddNewsImagesComponent;
  let fixture: ComponentFixture<AddNewsImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
