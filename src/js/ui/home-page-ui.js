import refs from '../refs/refs';
import { searchFormSubmitHandler } from '../handlers/searchFormSubmitHandler';
import { homeGalleryClickHandler } from '../handlers/homeGalleryClickHandler';
import { dynamicRefs } from '../refs/dynamicRefs';
import { trackScroll, backToTop } from '../handlers/scrollUpClickHandler';
import movieCards from '../../templates/movie-card.hbs';
import modalMovie from '../../templates/modal-for-movie.hbs';
import {
  modalWatchedBtnClickHandler,
  modalQueueBtnClickHandler,
  onOpenModal,
} from '../handlers/modalBtnsClickHandler';
import { httpsYouTubeVideo } from '../youTube';
import { registerFormSubmitHandler } from '../handlers/registerFormSubmitHandler';
import { onRegistrationBtnClick } from '../registration-modal';

const setHomeEventListeners = () => {
  refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
  refs.homeGallery.addEventListener('click', homeGalleryClickHandler);

  refs.goTopBtn.addEventListener('click', backToTop);
  window.addEventListener('scroll', trackScroll);

  refs.registerForm.addEventListener('submit', registerFormSubmitHandler);
  refs.openRegistrationBtn.addEventListener('click', onRegistrationBtnClick);

  // refs.searchInput.addEventListener(
  //   'input',
  //   debounce(searchInputHandler, DEBOUNCE_DELAY)
  // );
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
  dynamicRefs().playTrailer.addEventListener('click', httpsYouTubeVideo);
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
