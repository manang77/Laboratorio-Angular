import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRotateComponent } from './image-rotate.component';

describe('ImageRotateComponent', () => {
  let component: ImageRotateComponent;
  let fixture: ComponentFixture<ImageRotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageRotateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
