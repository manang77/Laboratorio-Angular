import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { GalleryService } from '../services/gallery.service';
import { GalleryStatus, newGalleryStatus, GALLERY_CLICKS } from '../model/gallery';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})

export class PhotoGalleryComponent implements OnInit {
  galleryClicks = GALLERY_CLICKS;
  imagesList = this.galleryService.getGalleryImages();
  galleryStatus: GalleryStatus = newGalleryStatus();
  carrouselTimer: any;

  playFunction() {
    this.galleryService.playCarrousel();
    this.galleryStatus = { ...this.galleryService.getGalleryStatus() };
  }

  galleryButtonClick(button: number) {

    switch (button) {

      case GALLERY_CLICKS.PLAY_CLICK:
        this.galleryService.play();
        const fnPlay = this.playFunction.bind(this);
        this.carrouselTimer = setInterval(fnPlay, 700);
        break;

      case GALLERY_CLICKS.STOP_CLICK:
        clearInterval(this.carrouselTimer);
        this.galleryService.stop();
        break;

      case GALLERY_CLICKS.NEXT_CLICK:
        this.galleryService.next();
        break;

      case GALLERY_CLICKS.PREVIOUS_CLICK:
        this.galleryService.previous();
        break;

      case GALLERY_CLICKS.ZOOM_IN_CLICK:
        this.galleryService.zoomIn();
        break;

      case GALLERY_CLICKS.ZOOM_OUT_CLICK:
        this.galleryService.zoomOut();
        break;
    }
    this.galleryStatus = { ...this.galleryService.getGalleryStatus() };
  }

  onCarruselButtonClick(button: number) {
    switch (button) {

      case GALLERY_CLICKS.NEXT_PAGE_CLICK:
        this.galleryService.carrouselNextPage();
        break;

      case GALLERY_CLICKS.PREVIOUS_PAGE_CLICK:
        this.galleryService.carrouselPreviousPage();
        break;
    }
    this.galleryStatus = { ...this.galleryService.getGalleryStatus() };
  }

  onCarruselImageClick(id: number) {
    this.galleryService.displayCarrouselImage(id);
    this.galleryStatus = { ...this.galleryService.getGalleryStatus() };
  }

  constructor(private router: Router, private authService: AuthService, private galleryService: GalleryService) {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }
}
