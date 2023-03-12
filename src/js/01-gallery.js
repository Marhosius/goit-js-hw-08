// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');

const createGallary = galleryItems.map(({ preview, original, description }) => `
<li class="gallery__link"> <a href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a> </li>`);
galleryListEl.insertAdjacentHTML('afterbegin', createGallary.join(""));

let gallery = new SimpleLightbox('.gallery a');
gallery.options.captionsData = "alt";
gallery.options.captionDelay = 250;