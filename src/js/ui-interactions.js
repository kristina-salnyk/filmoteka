import refs from './refs';
import { watchedTabClickHandler } from './watchedTabClickHandler';
import { queueTabClickHandler } from './queueTabClickHandler';
import { searchFormSubmitHandler } from './searchFormSubmitHandler';
import { homeGalleryClickHandler } from './homeGalleryClickHandler';
import movieCards from '../templates/movie-card.hbs';

const setHomeEventListeners = () => {
  refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
  refs.homeGallery.addEventListener("click", homeGalleryClickHandler)
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

export default {
  setHomeEventListeners,
  setLibraryEventListeners,
  appendGalleryMarkup,
  scrollToUp,
};
