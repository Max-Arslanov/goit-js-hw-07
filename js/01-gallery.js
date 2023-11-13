import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");
const markup = galleryItems.map ((galleryItem) => `<li class="gallery__item">
<a class="gallery__link" href="${galleryItem.original}">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt="${galleryItem.description}"
  />
</a>
</li>`)
.join("");
list.innerHTML = markup;
console.log(galleryItems);
