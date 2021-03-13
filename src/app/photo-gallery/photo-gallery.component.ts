import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { GalleryService } from '../services/gallery.service';
import { GalleryStatus, newGalleryStatus, GALLERY_CLICKS, INITIAL_SELECTED_IMAGE_SELECTED_SIZE } from '../model/gallery';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  galleryClicks = GALLERY_CLICKS;
  galleryStatus: GalleryStatus = newGalleryStatus();
  imagesList = this.galleryService.getGalleryImages();
  carrouselTimer: any;

  playFunction() {
    this.galleryStatus = {
      ...this.galleryStatus,
      selectedImageIndex: this.galleryStatus.selectedImageIndex === (this.imagesList.length - 1)
        ?
        0
        :
        this.galleryStatus.selectedImageIndex + 1,
    };
  }

  galleryButtonClick(button: number) {

    switch (button) {

      case GALLERY_CLICKS.PLAY_CLICK:
        this.galleryStatus = {
          ...this.galleryStatus,
          playActivated: true,
          firstImageSelected: true,
          lastImageSelected: true,
          selectedImageWidth: INITIAL_SELECTED_IMAGE_SELECTED_SIZE
        };
        const fnPlay = this.playFunction.bind(this);
        this.carrouselTimer = setInterval(fnPlay, 700);
        break;

      case GALLERY_CLICKS.STOP_CLICK:
        clearInterval(this.carrouselTimer);
        this.galleryStatus = {
          ...this.galleryStatus,
          playActivated: false,
          firstImageSelected: this.galleryStatus.selectedImageIndex === 0 ? true : false,
          lastImageSelected: this.galleryStatus.selectedImageIndex === (this.imagesList.length - 1) ? true : false,
        };
        break;

      case GALLERY_CLICKS.NEXT_CLICK:
        this.galleryStatus = {
          ...this.galleryStatus,
          selectedImageIndex: this.galleryStatus.selectedImageIndex + 1,
          firstImageSelected: false,
          lastImageSelected: this.galleryStatus.selectedImageIndex === (this.imagesList.length - 2) ? true : false,
          selectedImageWidth: INITIAL_SELECTED_IMAGE_SELECTED_SIZE,
        };
        break;

      case GALLERY_CLICKS.PREVIOUS_CLICK:
        this.galleryStatus = {
          ...this.galleryStatus,
          selectedImageIndex: this.galleryStatus.selectedImageIndex - 1,
          lastImageSelected: false,
          firstImageSelected: this.galleryStatus.selectedImageIndex === 1 ? true : false,
          selectedImageWidth: INITIAL_SELECTED_IMAGE_SELECTED_SIZE
        };
        break;

      case GALLERY_CLICKS.ZOOM_IN_CLICK:
        this.galleryStatus = {
          ...this.galleryStatus,
          selectedImageWidth: this.galleryStatus.selectedImageWidth * 1.2,
        };
        break;

      case GALLERY_CLICKS.ZOOM_OUT_CLICK:
        this.galleryStatus = {
          ...this.galleryStatus,
          selectedImageWidth: this.galleryStatus.selectedImageWidth * 0.8,
        };
        break;
    }
  }

  onCarruselButtonClick(button: number) {

    switch (button) {

      case GALLERY_CLICKS.NEXT_PAGE_CLICK:
        this.galleryStatus = {
          ...this.galleryStatus,
          firstImageCarrousel: (this.galleryStatus.firstImageCarrousel + 3) > (this.imagesList.length - 3)
            ?
            (this.imagesList.length - 3)
            :
            (this.galleryStatus.firstImageCarrousel + 3),
          firstCarrouselPage: false,
          lastCarrouselPage: (this.galleryStatus.firstImageCarrousel + 3) > (this.imagesList.length - 3)
            ?
            true
            :
            false
        };
        break;

      case GALLERY_CLICKS.PREVIOUS_PAGE_CLICK:
        this.galleryStatus = {
          ...this.galleryStatus,
          firstImageCarrousel: (this.galleryStatus.firstImageCarrousel - 3) < 0 ? 0 : (this.galleryStatus.firstImageCarrousel - 3),
          firstCarrouselPage: (this.galleryStatus.firstImageCarrousel - 3) <= 0
            ?
            true
            :
            false,
          lastCarrouselPage: false,
        };
        break;

    }
  }

  onCarruselImageClick(id: number) {
    this.galleryStatus = {
      ...this.galleryStatus,
      selectedImageIndex: id,
      lastImageSelected: id === this.imagesList.length ? true : false,
      firstImageSelected: id === 0 ? true : false,
      selectedImageWidth: INITIAL_SELECTED_IMAGE_SELECTED_SIZE
    }
  }

  constructor(private router: Router, private authService: AuthService, private galleryService: GalleryService) {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

}
