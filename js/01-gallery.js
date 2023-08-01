import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

let instance;

const markup = galleryItems.reduce(
  (acc, { original, preview, description }) => {
    return (
      acc +
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    );
  },
  ""
);

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(`
 <img class="gallery__image" src='${event.target.dataset.source}'>
  `);
  instance.show();
}

gallery.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    instance.close();
  }
});
