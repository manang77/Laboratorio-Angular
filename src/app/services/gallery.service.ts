import { Injectable } from '@angular/core';
import { GalleryPhoto, GalleryPhotoList } from '../model/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  gallery: GalleryPhoto[] = GalleryPhotoList;

  getGalleryImages(): GalleryPhoto[] {
    return this.gallery;
  }
  constructor() { }
}
