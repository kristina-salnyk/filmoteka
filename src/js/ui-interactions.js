import refs from './refs';
import { watchedTabClickHandler } from './watchedTabClickHandler';
import { queueTabClickHandler } from './queueTabClickHandler';
import { searchFormSubmitHandler } from './searchFormSubmitHandler';
import movieCards from '../templates/movie-card.hbs';

const setHomeEventListeners = () => {
  refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
};

const setLibraryEventListeners = () => {
  refs.watchedTab.addEventListener('click', watchedTabClickHandler);
  refs.queueTab.addEventListener('click', queueTabClickHandler);
};

const appendGalleryMarkup = movies => {
  refs.homeGallery.innerHTML = movieCards(movies);
};

export default {
  setHomeEventListeners,
  setLibraryEventListeners,
  appendGalleryMarkup,
};
