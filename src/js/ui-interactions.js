import refs from './refs';
import { watchedTabClickHandler } from './watchedTabClickHandler';
import { queueTabClickHandler } from './queueTabClickHandler';
import { searchFormSubmitHandler } from './searchFormSubmitHandler';
import { oneMovieClickHandler } from './oneMovieClickHandler';
import movieCards from '../templates/movie-card.hbs';
import modalMovie from '../templates/modal-for-movie.hbs';
import { dynamicRefs } from './dynamicRefs';

const setHomeEventListeners = () => {
  refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
  refs.homeGallery.addEventListener('click', oneMovieClickHandler);
};

const setLibraryEventListeners = () => {
  refs.watchedTab.addEventListener('click', watchedTabClickHandler);
  refs.queueTab.addEventListener('click', queueTabClickHandler);
};

const appendGalleryMarkup = movies => {
  refs.homeGallery.innerHTML = movieCards(movies);
};

const scrollToUp = () => {
  window.scrollBy(0, 0);
};

const appendMovieMarkup = movie => {
  dynamicRefs().movieData.innerHTML = modalMovie(movie);
};

export default {
  setHomeEventListeners,
  setLibraryEventListeners,
  appendGalleryMarkup,
  appendMovieMarkup,
  scrollToUp,
};
