import images from "../js/gallery-items.js";

// 1-й шаг (добавление в список галереи фоток)
const ulJsGallery = document.querySelector("ul.js-gallery");

images.map((el, index) => {
  ulJsGallery.innerHTML += `
  <li class="gallery__item">
      <a class="gallery__link"
      href="${el.original}">
          <img class="gallery__image"
          src="${el.preview}" 
          data-source="${el.preview}"
          alt="${el.description}" 
          data-index="${index}"/>
      </a>
  </li>
  `;
});

// 2-й шаг (добавление модального окна)
const divLightbox = document.querySelector("div.js-lightbox");
const imgModal = document.querySelector("img.lightbox__image");

// ulJsGallery.addEventListener("click", openModalWindow);
// function openModalWindow() {
//   e.preventDefault();
//   let modalLink = e.target.dataset.source;
//   divLightbox.classList.add("is-open");
//   imgModal.src = modalLink;
//   imgModal.dataset.index = e.target.dataset.index;
// }

ulJsGallery.addEventListener("click", (item) => {
  item.preventDefault();
  let modalLink = item.target.dataset.source;
  divLightbox.classList.add("is-open");
  imgModal.src = modalLink;
  imgModal.dataset.index = item.target.dataset.index;
});

// 3-й шаг (выключение модального окна нажатием кнопки Х и нажатием на Overlay )
const buttonClose = document.querySelector("button.lightbox__button");
const divOverlay = document.querySelector("div.lightbox__overlay");

buttonClose.addEventListener("click", closeModalWindow);
divOverlay.addEventListener("click", closeModalWindow);

function closeModalWindow() {
  divLightbox.classList.remove("is-open");
  imgModal.src = "";
}
