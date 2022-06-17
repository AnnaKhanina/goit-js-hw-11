// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
}

refs.gallery.innerHTML = createGalleryMarkup(galleryItems);

let galleryCreated = new SimpleLightbox('.gallery a', {
    caption: true,
    captionType: 'attr',
    captionDelay: '250',
    captionsData: 'alt',
});

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>`})
        .join('')
}
