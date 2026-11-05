//
// Добавлен DropDown
// Открывается при клике по кнопке
// Закрывается при клике по кнопке/нажатию Escape/мимо Dropdown
//

const dropDownButton = document.querySelector(".menu__dropdown-button");
const dropDown = document.querySelector(".menu__dropdown");

dropDownButton.addEventListener("click", () => {
  dropDown.classList.toggle("menu--closed");
  dropDown.classList.toggle("menu--open");

  const isOpen = dropDown.classList.contains("menu--open");
  dropDownButton.setAttribute("aria-expanded", isOpen);
});

export const closeDropdown = () => {
  dropDown.classList.add("menu--closed");
  dropDown.classList.remove("menu--open");

  dropDownButton.setAttribute("aria-expanded", false);
};

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDropdown();
  }
});

document.addEventListener("click", (event) => {
  if (
    !dropDown.contains(event.target) &&
    !dropDownButton.contains(event.target)
  ) {
    closeDropdown();
  }
});
