import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryButtonsComponent } from './gallery-buttons.component';

describe('GalleryButtonsComponent', () => {
  let component: GalleryButtonsComponent;
  let fixture: ComponentFixture<GalleryButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
