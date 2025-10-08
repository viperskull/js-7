import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const liImage = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"  />
   </a>
</li>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("afterbegin", liImage);

const lightbox = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);