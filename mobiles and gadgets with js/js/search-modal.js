//
// Добавлено модальное окно
// Открывается по клику на лупу поиска
// Закрывается: кликом мимо формы, кликом на крестик, отправкой данных в инпуте через Enter/кнопку Search
//

const searchModal = document.querySelector(".search__modal");
const searchButton = document.querySelector(".controls__search-button");
const crossButton = document.querySelector(".search__modal-close");
const searchForm = document.querySelector(".search__modal-form");
const searchInput = document.querySelector(".search__modal-input");

const openSearchModal = () => {
  searchModal.classList.add("search__modal--open");
  searchModal.classList.remove("search__modal--closed");
  document.body.classList.add("page__body--no-scroll");

  searchButton.setAttribute("aria-expanded", true);
  setTimeout(() => {
    searchInput.focus();
  }, 100);
};

const closeSearchModal = () => {
  searchModal.classList.remove("search__modal--open");
  searchModal.classList.add("search__modal--closed");
  document.body.classList.remove("page__body--no-scroll");

  searchButton.setAttribute("aria-expanded", false);
};

searchButton.addEventListener("click", openSearchModal);

crossButton.addEventListener("click", closeSearchModal);

searchModal.addEventListener("click", (event) => {
  if (event.target === searchModal) {
    closeSearchModal();
  }
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closeSearchModal();
});
