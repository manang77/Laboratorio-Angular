import { Injectable } from '@angular/core';
import { GalleryPhoto, GalleryPhotoList } from '../model/gallery';
import { GalleryStatus, newGalleryStatus, GALLERY_CLICKS, INITIAL_SELECTED_IMAGE_SELECTED_SIZE } from '../model/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  gallery: GalleryPhoto[] = GalleryPhotoList;
  galleryClicks = GALLERY_CLICKS;
  galleryStatus: GalleryStatus = newGalleryStatus();

  getGalleryImages(): GalleryPhoto[] {
    return this.gallery;
  }

  next() {
    this.galleryStatus = {
      ...this.galleryStatus,
      selectedImageIndex: this.galleryStatus.selectedImageIndex + 1,
      firstImageSelected: false,
      lastImageSelected: this.galleryStatus.selectedImageIndex === (this.gallery.length - 2) ? true : false,
      selectedImageWidth: INITIAL_SELECTED_IMAGE_SELECTED_SIZE,
    };
  }

  previous() {
    this.galleryStatus = {
      ...this.galleryStatus,
      selectedImageIndex: this.galleryStatus.selectedImageIndex - 1,
      lastImageSelected: false,
      firstImageSelected: this.galleryStatus.selectedImageIndex === 1 ? true : false,
      selectedImageWidth: INITIAL_SELECTED_IMAGE_SELECTED_SIZE
    }
  };

  zoomIn() {
    this.galleryStatus = {
      ...this.galleryStatus,
      selectedImageWidth: this.galleryStatus.selectedImageWidth * 1.2,
    }
  }

  zoomOut() {
    this.galleryStatus = {
      ...this.galleryStatus,
      selectedImageWidth: this.galleryStatus.selectedImageWidth * 0.8,
    }
  }

  carrouselNextPage() {
    this.galleryStatus = {
      ...this.galleryStatus,
      firstImageCarrousel: (this.galleryStatus.firstImageCarrousel + 3) > (this.gallery.length - 3)
        ?
        (this.gallery.length - 3)
        :
        (this.galleryStatus.firstImageCarrousel + 3),
      firstCarrouselPage: false,
      lastCarrouselPage: (this.galleryStatus.firstImageCarrousel + 3) > (this.gallery.length - 3)
        ?
        true
        :
        false
    }
  }

  carrouselPreviousPage() {
    this.galleryStatus = {
      ...this.galleryStatus,
      firstImageCarrousel: (this.galleryStatus.firstImageCarrousel - 3) < 0 ? 0 : (this.galleryStatus.firstImageCarrousel - 3),
      firstCarrouselPage: (this.galleryStatus.firstImageCarrousel - 3) <= 0
        ?
        true
        :
        false,
      lastCarrouselPage: false,
    }
  }

  displayCarrouselImage(id: number) {
    this.galleryStatus = {
      ...this.galleryStatus,
      selectedImageIndex: id,
      lastImageSelected: id === this.gallery.length ? true : false,
      firstImageSelected: id === 0 ? true : false,
      selectedImageWidth: INITIAL_SELECTED_IMAGE_SELECTED_SIZE
    }
  }

  play() {
    this.galleryStatus = {
      ...this.galleryStatus,
      playActivated: true,
      firstImageSelected: true,
      lastImageSelected: true,
      selectedImageWidth: INITIAL_SELECTED_IMAGE_SELECTED_SIZE
    }
  }

  playCarrousel() {
    this.galleryStatus = {
      ...this.galleryStatus,
      selectedImageIndex: this.galleryStatus.selectedImageIndex === (this.gallery.length - 1)
        ?
        0
        :
        this.galleryStatus.selectedImageIndex + 1,
    }
  }

  stop() {
    this.galleryStatus = {
      ...this.galleryStatus,
      playActivated: false,
      firstImageSelected: this.galleryStatus.selectedImageIndex === 0 ? true : false,
      lastImageSelected: this.galleryStatus.selectedImageIndex === (this.gallery.length - 1) ? true : false,
    }
  }

  getGalleryStatus() {
    return this.galleryStatus;
  }

  constructor() { }
}
