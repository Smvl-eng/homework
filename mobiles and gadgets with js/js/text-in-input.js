//
// Добавлена функция которая обробатывает клик, и передает его в инпут
//

const input = document.querySelector(".search__input");
const wrapButtons = document.querySelector(".search__buttons-wrapper");

const wrapTextInInput = (event) => {
  const text = event.target.textContent;
  input.value = text.trim();
};

wrapButtons.addEventListener("click", (event) => {
  if (event.target.closest(".search__item")) {
    wrapTextInInput(event);
  }
});
