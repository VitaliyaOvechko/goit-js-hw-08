import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGallery(gallery) {
    return gallery.map(({ preview, original, description }) => 
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    ).join("");
}

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, captionPosition:'bottom', scrollZoom: false,});