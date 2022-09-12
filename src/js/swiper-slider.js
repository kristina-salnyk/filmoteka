import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';

export const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,

  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensivity: 1,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },

  loopFillGroupWithBlank: true,

  setWrapperSize: true,
  spaceBetween: 30,
  speed: 500,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
