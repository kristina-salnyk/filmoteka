import refs from '../refs/refs';
import { searchFormSubmitHandler } from '../handlers/searchFormSubmitHandler';
import { oneMovieClickHandler } from '../handlers/oneMovieClickHandler';
import { dynamicRefs } from '../refs/dynamicRefs';
import { trackScroll, backToTop } from '../handlers/scrollUpClickHandler';
import movieCards from '../../templates/movie-card.hbs';
import modalMovie from '../../templates/modal-for-movie.hbs';
import {
  modalWatchedBtnClickHandler,
  modalQueueBtnClickHandler,
  onOpenModal,
} from '../handlers/modalBtnsClickHandler';

const setHomeEventListeners = () => {
  refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
  refs.homeGallery.addEventListener('click', oneMovieClickHandler);
  window.addEventListener('scroll', trackScroll);
  refs.goTopBtn.addEventListener('click', backToTop);
};

const appendGalleryMarkup = movies => {
  refs.homeGallery.innerHTML = movieCards(movies);
};

const appendMovieMarkup = movie => {
  dynamicRefs().movieData.innerHTML = modalMovie(movie);

  dynamicRefs().watchedBtn.addEventListener(
    'click',
    modalWatchedBtnClickHandler
  );
  dynamicRefs().queueBtn.addEventListener('click', modalQueueBtnClickHandler);
  onOpenModal(movie.id);
};

const scrollToUp = () => {
  window.scrollBy(0, 0);
};

export default {
  setHomeEventListeners,
  appendGalleryMarkup,
  appendMovieMarkup,
  scrollToUp,
};
