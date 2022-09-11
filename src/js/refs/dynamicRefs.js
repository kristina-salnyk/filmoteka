export const dynamicRefs = () => ({
  watchedBtn: document.getElementById('watched-btn'),
  queueBtn: document.getElementById('queue-btn'),
  movieData: document.querySelector('[data-movie]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  closeRegistrationBtn: document.querySelector(
    '[data-action="close-registration-modal"]'
  ),
  backdrop: document.querySelector('.js-modal-close-btn'),
  registrationBackdrop: document.querySelector('[data-registration-modal]'),
  btnCloseModalYoutybe: document.querySelector('[data-action="btn__close"]'),
  playTrailer: document.getElementById('play-trailer'),
  paginList: document.querySelector('.pagination__list'),
  leftArrow: document.querySelector('[data-arrow="left"]'),
  rightArrow: document.querySelector('[data-arrow="right"]'),
});
