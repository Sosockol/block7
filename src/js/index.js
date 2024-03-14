import '../scss/style.scss'
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const hideClass = 'visually-hidden';

let swiperObj = new Swiper('.mySwiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 'auto',

  on: {
    resize: function enableOnlyMobile(swiper) {
      if (768 < window.innerWidth) {
        swiper.disable();
        swiper.el.classList.add(hideClass);
      } else {
        swiper.enable();
        swiper.el.classList.remove(hideClass);
      }
    }
  }
});

const expandable = document.querySelector('.l-info__expandable');

document.addEventListener('DOMContentLoaded', function () {
  if (768 > window.screen.width) {
    swiperObj.el.classList.remove(hideClass);
  }


  if (768 <= window.screen.width) {
    expandable.classList.remove(hideClass);
  }
});

window.addEventListener('resize', () => {
  if (768 > window.screen.width) {
    swiperObj.el.classList.remove(hideClass);
    expandable.classList.add(hideClass);
  }


  if (768 <= window.screen.width) {
    expandable.classList.remove(hideClass);
    swiperObj.el.classList.add(hideClass);
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