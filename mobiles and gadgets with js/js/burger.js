//
// Добавлен бургер-меню
// Открывается по клику на иконку бургера
// При ширине 375px меню растягивается на весь экран
// Меню может закрыться двумя способами, нажатием на ссылку внутри меню, либо нажатием мимо меню
//

import { closeDropdown } from "./dropdown.js";

const burgerButton = document.querySelector(".controls__burger");
const crossButton = document.querySelector(".menu__close-cross");
const burgerMenu = document.querySelector(".menu__list");

const openMenu = () => {
  burgerMenu.classList.remove("menu__list--closed");
  burgerMenu.classList.add("menu__list--open");
  document.body.classList.add("page__body--no-scroll");

  burgerButton.setAttribute("aria-expanded", true);
};

const closeMenu = () => {
  burgerMenu.classList.add("menu__list--closed");
  burgerMenu.classList.remove("menu__list--open");
  document.body.classList.remove("page__body--no-scroll");

  burgerButton.setAttribute("aria-expanded", false);

  closeDropdown();
};

burgerButton.addEventListener("click", openMenu);

crossButton.addEventListener("click", closeMenu);

document.addEventListener("click", (event) => {
  if (
    !burgerMenu.contains(event.target) &&
    !burgerButton.contains(event.target) &&
    burgerMenu.classList.contains("menu__list--open")
  ) {
    closeMenu();
  }
});

burgerMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});
