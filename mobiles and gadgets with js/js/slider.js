//
// Добален слайдер
// При клике на правую стрелку появляется следующий слайд
// При клике на левую стрелку появляется предыдущий слайд
//

const allSlides = document.querySelectorAll(".hero__slide");
const allLines = document.querySelectorAll(".hero__line");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slideTrack = document.querySelector(".hero__track");

let currentSlide = 0;

const showSlide = () => {
  slideTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  allLines.forEach((line, index) => {
    line.classList.toggle("hero__line--active", index === currentSlide);
  });

  allSlides.forEach((slide, index) => {
    slide.inert = index !== currentSlide;
  });
};

arrowRight.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % allSlides.length;
  showSlide();
});

arrowLeft.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + allSlides.length) % allSlides.length;
  showSlide();
});

showSlide();
