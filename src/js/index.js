import '../scss/style.scss'

const slider = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 'auto',
});

const swiper = document.querySelector('.l-info__swiper');
const expandable = document.querySelector('.l-info__expandable');
const hideClass = 'visually-hidden';
swiper.hidden = true;
expandable.hidden = true;

document.addEventListener('DOMContentLoaded', function () {
  if (768 > window.screen.width) {
    swiper.classList.remove(hideClass);
    expandable.classList.remove(hideClass);
    swiper.hidden = false;
  } else {
    expandable.classList.remove(hideClass);
    swiper.classList.remove(hideClass);
    expandable.hidden = false;
  }
});

window.addEventListener('resize', () => {
  if (768 > window.innerWidth) {
    swiper.hidden = false;
    expandable.hidden = true;
  } else {
    swiper.hidden = true;
    expandable.hidden = false;
  }
});

const expandButton = expandable.querySelector('.expandable__button');
const expandList = expandable.firstElementChild;
const buttonParagraph = expandButton.lastElementChild;

const expandArrow = expandButton.firstElementChild;


expandButton.addEventListener('click', () => {
  let buttonText = buttonParagraph.textContent;
  if (buttonText == 'Показать все') {
    buttonParagraph.textContent = 'Свернуть';
    expandArrow.style.transform = 'rotate(180deg)';
    expandList.style.height = 'auto';
  } else {
    buttonParagraph.textContent = 'Показать все';
    expandArrow.style.transform = 'rotate(0deg)';
    expandList.style.height = '160px';
  }
});

const sidebar = document.querySelector('.l-sideMenu');

document.addEventListener('DOMContentLoaded', function () {
  if (1440 <= window.screen.width) {
    sidebar.classList.remove(hideClass);
  }
});

window.addEventListener('resize', () => {
  if (1440 <= window.screen.width) {
    sidebar.classList.remove(hideClass);
  } else {
    sidebar.classList.add(hideClass);
  }
});

const burger = document.querySelector('.burger');

burger.addEventListener('click', (evt) => {
  sidebar.classList.remove(hideClass);
});

const cross = sidebar.querySelector('.navbar__cross');

cross.addEventListener('click', () => {
  sidebar.classList.add(hideClass);
});