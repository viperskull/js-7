import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const liImage = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
  <img
  class="gallery__image"
  src="${galleryItem.preview}"
  data-source="${galleryItem.original}"
  alt="${galleryItem.description}"
  />
  </a>
  </li>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("afterbegin", liImage);

function handleClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
    `);
  event.preventDefault();
  instance.show();

  galleryContainer.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && basicLightbox.visible()) {
      instance.close();
    }
  });
}

galleryContainer.addEventListener("click", handleClick);