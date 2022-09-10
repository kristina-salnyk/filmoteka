export const dynamicRefs = () => ({
  watchedBtn: document.getElementById('watched-btn'),
  queueBtn: document.getElementById('queue-btn'),
  movieData: document.querySelector('[movie-data]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-modal-close-btn'),
  btnCloseModalYoutybe: document.querySelector(
    'button[data-action="btn_close"]'
  ),
  playTrailer: document.getElementById('play-trailer'),

  paginList: document.querySelector('.pagination__list'),
  leftArrow: document.querySelector('[data-arrow="left"]'),
  rightArrow: document.querySelector('[data-arrow="right"]'),
});
