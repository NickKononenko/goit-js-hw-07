import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { original, preview, description }) => {
    return (
      acc +
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`
    );
  },
  ""
);

gallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.9,
  captionsData: "alt",
  captionDelay: 250,
});
