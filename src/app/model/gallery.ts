export interface GalleryPhoto {
  id: number;
  src: string,
  title: string,
};

export interface GalleryStatus {
  selectedImageIndex: number;
  inicioCarrusel: number;
  playActivated: boolean;
  firstImageSelected: boolean;
  lastImageSelected: boolean;
  selectedImageWidth: number;
  firstImageCarrousel: number;
  firstCarrouselPage: boolean;
  lastCarrouselPage: boolean;
}

export const newGalleryStatus = (): GalleryStatus => {
  return {
    selectedImageIndex: 0,
    inicioCarrusel: 0,
    playActivated: false,
    firstImageSelected: true,
    lastImageSelected: false,
    selectedImageWidth: 600,
    firstImageCarrousel: 0,
    firstCarrouselPage: true,
    lastCarrouselPage: false,

  }
}

export const GalleryPhotoList: GalleryPhoto[] = [
  { id: 0, src: "assets/image1.jpg", title: "Deer" },
  { id: 1, src: "assets/image2.jpg", title: "Bear" },
  { id: 2, src: "assets/image3.jpg", title: "Vulture" },
  { id: 3, src: "assets/image4.jpg", title: "Dog" },
  { id: 4, src: "assets/image5.jpg", title: "Jellyfish" },
  { id: 5, src: "assets/image6.jpg", title: "Lioness" },
  { id: 6, src: "assets/image7.jpg", title: "Walrus" },
  { id: 7, src: "assets/image8.jpg", title: "Leopard" },
];

export const GALLERY_CLICKS = {
  NEXT_CLICK: 1,
  PREVIOUS_CLICK: 2,
  PLAY_CLICK: 3,
  STOP_CLICK: 4,
  ZOOM_IN_CLICK: 5,
  ZOOM_OUT_CLICK: 6,
  NEXT_PAGE_CLICK: 7,
  PREVIOUS_PAGE_CLICK: 8
}

export const INITIAL_SELECTED_IMAGE_SELECTED_SIZE = 600;

