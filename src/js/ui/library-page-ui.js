import refs from '../refs/refs';
import { watchedTabClickHandler } from '../handlers/watchedTabClickHandler';
import { queueTabClickHandler } from '../handlers/queueTabClickHandler';
import { libraryGalleryClickHandler } from '../handlers/libraryGalleryClickHandler';
import movieCards from '../../templates/movie-card.hbs';
import { dynamicRefs } from '../refs/dynamicRefs';
import { trackScroll, backToTop } from '../handlers/scrollUpClickHandler';
import modalMovie from '../../templates/modal-for-movie.hbs';
import {
  modalQueueBtnClickHandler,
  modalWatchedBtnClickHandler,
  onOpenModal,
} from '../handlers/modalBtnsClickHandler';
import { httpsYouTubeVideo } from '../youTube';
import { registerFormSubmitHandler } from '../handlers/registerFormSubmitHandler';
import localStorageService from '../local-storage/local-storage-service';
import keys from '../local-storage/local-storage-keys';

const setLibraryEventListeners = () => {
  refs.watchedTab.addEventListener('click', watchedTabClickHandler);
  refs.queueTab.addEventListener('click', queueTabClickHandler);

  refs.libraryGallery.addEventListener('click', libraryGalleryClickHandler);

  refs.registerForm.addEventListener('submit', registerFormSubmitHandler);

  refs.goTopBtn.addEventListener('click', backToTop);
  window.addEventListener('scroll', trackScroll);
};

const appendGalleryMarkup = movies => {
  refs.libraryGallery.innerHTML = movieCards(movies);
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

function renderEmptyLibrary() {
  const fillerLibrary =
    '<p class="empty-page__text"> Nothing to see here<br>Add a movie please</p>';
  refs.libraryGallery.insertAdjacentHTML('afterbegin', fillerLibrary);
}
const scrollToTop = () => {
  window.scrollBy(0, 0);
};

export function deleteMoviCard() {
  const movieId = localStorageService.load(keys.MODAL_MOVIE);

  const watchedMoviesIds = localStorageService.load(keys.WATCHED_MOVIES);
  const queueMoviesIds = localStorageService.load(keys.QUEUE_MOVIES);
  const elByID = document.querySelector(`[data-id='${movieId}']`);

  if (!watchedMoviesIds.includes(String(movieId)) && elByID&& refs.libraryGallery) {
    const deleteElement = elByID.parentElement;
    deleteElement.remove();
  }
  if (
    !queueMoviesIds.includes(String(movieId)) &&
    elByID &&
    refs.libraryGallery
  ) {
    const deleteElement = elByID.parentElement;
    deleteElement.remove();
  }
}

export default {
  setLibraryEventListeners,
  appendGalleryMarkup,
  appendMovieMarkup,
  renderEmptyLibrary,
  scrollToTop,
};
