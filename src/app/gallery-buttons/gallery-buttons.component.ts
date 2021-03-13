import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GALLERY_CLICKS, GalleryStatus, newGalleryStatus } from '../model/gallery';

@Component({
  selector: 'app-gallery-buttons',
  templateUrl: './gallery-buttons.component.html',
  styleUrls: ['./gallery-buttons.component.scss']
})
export class GalleryButtonsComponent implements OnInit {
  galleryClicks = GALLERY_CLICKS;

  @Input() galleryStatus: GalleryStatus = newGalleryStatus();
  @Output() galleryButtonClick: EventEmitter<number> = new EventEmitter()

  onButtonClick(button: number) {
    this.galleryButtonClick.emit(button);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
