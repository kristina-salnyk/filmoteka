import refs from '../refs/refs';
import { watchedTabClickHandler } from '../handlers/watchedTabClickHandler';
import { queueTabClickHandler } from '../handlers/queueTabClickHandler';
import movieCards from '../../templates/movie-card.hbs';

const setLibraryEventListeners = () => {
  refs.watchedTab.addEventListener('click', watchedTabClickHandler);
  refs.queueTab.addEventListener('click', queueTabClickHandler);
};

const appendGalleryMarkup = movies => {
  refs.libraryGallery.innerHTML = movieCards(movies);
};

export default { setLibraryEventListeners, appendGalleryMarkup };
