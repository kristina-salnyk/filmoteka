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
});
