import refs from './refs';
import { watchedTabClickHandler } from './watchedTabClickHandler';
import { queueTabClickHandler } from './queueTabClickHandler';
import { searchFormSubmitHandler } from './searchFormSubmitHandler';
import { oneMovieClickHandler } from './oneMovieClickHandler';
import movieCards from '../templates/movie-card.hbs';
import modalMovie from '../templates/modal-for-movie.hbs';

const setHomeEventListeners = () => {
  refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
  refs.homeGallery.addEventListener('click', oneMovieClickHandler);
};

const setLibraryEventListeners = () => {
  refs.watchedTab.addEventListener('click', watchedTabClickHandler);
  refs.queueTab.addEventListener('click', queueTabClickHandler);
};

const appendGalleryMarkup = movies => {
  refs.homeGallery.insertAdjacentHTML('beforeend', movieCards(movies));
};

const appendMovieMarkup = movie => {
  refs.movieData.innerHTML = modalMovie(movie);
};

export default {
  setHomeEventListeners,
  setLibraryEventListeners,
  appendGalleryMarkup,
  appendMovieMarkup,
};
