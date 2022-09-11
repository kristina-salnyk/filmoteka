import refs from '../refs/refs';
import { watchedTabClickHandler } from '../handlers/watchedTabClickHandler';
import { queueTabClickHandler } from '../handlers/queueTabClickHandler';
import { libraryGalleryClickHandler } from '../handlers/libraryGalleryClickHandler';
import movieCards from '../../templates/movie-card.hbs';
import { dynamicRefs } from '../refs/dynamicRefs';
import modalMovie from '../../templates/modal-for-movie.hbs';
import {
  modalQueueBtnClickHandler,
  modalWatchedBtnClickHandler,
  onOpenModal,
} from '../handlers/modalBtnsClickHandler';
import { httpsYouTubeVideo } from '../you-tube';

const setLibraryEventListeners = () => {
  refs.watchedTab.addEventListener('click', watchedTabClickHandler);
  refs.queueTab.addEventListener('click', queueTabClickHandler);
  refs.libraryGallery.addEventListener('click', libraryGalleryClickHandler);
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

export default {
  setLibraryEventListeners,
  appendGalleryMarkup,
  appendMovieMarkup,
  renderEmptyLibrary,
};
