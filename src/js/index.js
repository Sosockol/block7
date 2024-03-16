import '../scss/style.scss'
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const hideClass = 'visually-hidden';

let swiperObj = new Swiper('.swiper', {
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

let secondSwiper = new Swiper('.swiper2', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination2',
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

let expandable = document.querySelectorAll('.l-info__expandable');

document.addEventListener('DOMContentLoaded', function () {
  if (768 > window.screen.width) {
    swiperObj.el.classList.remove(hideClass);
    secondSwiper.el.classList.remove(hideClass);
  }


  if (768 <= window.screen.width) {
    expandable[0].classList.remove(hideClass);
    expandable[1].classList.remove(hideClass);
  }
});

window.addEventListener('resize', () => {
  if (768 > window.screen.width) {
    swiperObj.el.classList.remove(hideClass);
    expandable[0].classList.add(hideClass);
    expandable[1].classList.add(hideClass);
  }


  if (768 <= window.screen.width) {
    expandable[0].classList.remove(hideClass);
    expandable[1].classList.remove(hideClass);
    swiperObj.el.classList.add(hideClass);
    secondSwiper.el.classList.add(hideClass);
  }
});

let expandButton = expandable[0].querySelector('.expandable__button');
let expandList = expandable[0].firstElementChild;
let buttonParagraph = expandButton.lastElementChild;
let expandArrow = expandButton.firstElementChild;


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

expandButton = expandable[1].querySelector('.expandable__button');
expandList = expandable[1].firstElementChild;
buttonParagraph = expandButton.lastElementChild;
expandArrow = expandButton.firstElementChild;


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

// Burger menu
const leftMenu = document.querySelector('.l-desktopContainer .l-sideMenu');

document.addEventListener('DOMContentLoaded', function () {
  if (1440 <= window.screen.width) {
    leftMenu.classList.remove(hideClass);
  }
});

window.addEventListener('resize', () => {
  if (1440 <= window.screen.width) {
    leftMenu.classList.remove(hideClass);
  } else {
    leftMenu.classList.add(hideClass);
  }
});

const burger = document.querySelector('.burger');
const shadow = document.body.querySelector('.desktopShadow');

burger.addEventListener('click', (evt) => {
  document.body.style = 'overflow: hidden;';
  leftMenu.classList.remove(hideClass);
  shadow.classList.remove(hideClass);
});

const cross = document.querySelector('.navbar__cross');

cross.addEventListener('click', () => {
  document.body.style = '';
  leftMenu.classList.add(hideClass);
  shadow.classList.add(hideClass);
});

const repairButton = document.querySelector('.navbar__repair');
const repairButton2 = document.querySelector('.desktopHeader__repair');
const rightBars = document.querySelectorAll('.l-sideMenu--right');

repairButton.addEventListener('click', () => {
  document.body.style = 'overflow: hidden;';
  rightBars[0].classList.remove(hideClass);
  shadow.classList.remove(hideClass);
});
repairButton2.addEventListener('click', () => {
  document.body.style = 'overflow: hidden;';
  rightBars[0].classList.remove(hideClass);
  shadow.classList.remove(hideClass);
});

const checkStatusButton = document.querySelector('.navbar__checkstatus');
const checkStatusButton2 = document.querySelector('.desktopHeader__checkstatus');

checkStatusButton.addEventListener('click', () => {
  document.body.style = 'overflow: hidden;';
  rightBars[1].classList.remove(hideClass);
  shadow.classList.remove(hideClass);
});
checkStatusButton2.addEventListener('click', () => {
  document.body.style = 'overflow: hidden;';
  rightBars[1].classList.remove(hideClass);
  shadow.classList.remove(hideClass);
});

const rightBarsCross = rightBars[0].querySelector('.l-sideMenu__cross');
const rightBarsCross2 = rightBars[1].querySelector('.l-sideMenu__cross');
rightBarsCross.addEventListener('click', () => {
  document.body.style = '';
  rightBars[0].classList.add(hideClass);
  shadow.classList.add(hideClass);
});

rightBarsCross2.addEventListener('click', () => {
  document.body.style = '';
  shadow.classList.add(hideClass);
  rightBars[1].classList.add(hideClass);
});

shadow.addEventListener('click', () => {
  document.body.style = '';
  rightBars[0].classList.add(hideClass);
  rightBars[1].classList.add(hideClass);
  shadow.classList.add(hideClass);
  if (window.screen.width < 1440) {
    leftMenu.classList.add(hideClass);
  }
})