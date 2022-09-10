import refs from './refs';
import { searchFormSubmitHandler } from './searchFormSubmitHandler';
import { oneMovieClickHandler } from './oneMovieClickHandler';
import { dynamicRefs } from './dynamicRefs';
import { trackScroll, backToTop } from './scroll-to-up-btn';
import movieCards from '../templates/movie-card.hbs';
import modalMovie from '../templates/modal-for-movie.hbs';

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

  
  dynamicRefs().watchedBtn.addEventListener('click', modalWatchedBtnClickHandler);
  dynamicRefs().queueBtn.addEventListener('click', modalQueueBtnClickHandler);

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
