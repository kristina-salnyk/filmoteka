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
import { onRegistrationBtnClick } from '../registration-modal';
import localStorageService from '../local-storage-service';
import { STORAGE_KEYS } from '../constants';
import { loadDataFromStorage } from '../loadDataFromStorage';
import { async } from '@firebase/util';
import paginationMarkup from '../pagination';
import { siteConfigs } from '../SiteConfigs';



const setLibraryEventListeners = () => {
  refs.watchedTab.addEventListener('click', watchedTabClickHandler);
  refs.queueTab.addEventListener('click', queueTabClickHandler);

  refs.libraryGallery.addEventListener('click', libraryGalleryClickHandler);

  refs.registerForm.addEventListener('submit', registerFormSubmitHandler);
  refs.openRegistrationBtn.addEventListener('click', onRegistrationBtnClick);

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

export async function deleteMovieCard() {
  const movieId = localStorageService.load(STORAGE_KEYS.MODAL_MOVIE);
  const elByID = document.querySelector(`[data-id='${movieId}']`);
  
  


  try {

    const deleteElement = elByID.parentElement;
    deleteElement.remove();
    localStorageService.save(STORAGE_KEYS.MODAL_MOVIE, '');

   
reRender()
    if (refs.libraryGallery.children.length === 0) {
      renderEmptyLibrary();
    }
  } catch {}
}

async function reRender() {

  const usersFilmsObj = await loadDataFromStorage('usersFilmsObj');
   const queueMovieIds = usersFilmsObj
     ? usersFilmsObj[STORAGE_KEYS.QUEUE_MOVIES]
    : usersFilmsObj;
  const watchedMovieIds = usersFilmsObj
    ? usersFilmsObj[STORAGE_KEYS.WATCHED_MOVIES]
    : usersFilmsObj;

  if (
    localStorageService.load(STORAGE_KEYS.LAST_FETCH) === 'WATCHED'
    &&
    watchedMovieIds.length > refs.libraryGallery.children.length
  ) {
   
    if (
      refs.libraryGallery.children.length === 1 &&
      refs.libraryGallery.children[0].nodeName!=='DIV'
    ) {
     
      siteConfigs.decrementWatchedPage()
    }
      paginationMarkup(
        Math.ceil(watchedMovieIds.length / siteConfigs.perPage),
        siteConfigs.watchedPage
      );
      if (watchedMovieIds.length <= 20)
        refs.pagination.classList.add('pagination--off');
      
      watchedTabClickHandler();
   
    
  }
  
  if (
    localStorageService.load(STORAGE_KEYS.LAST_FETCH) === 'QUEUE' &&
    queueMovieIds.length > refs.libraryGallery.children.length
  ) {
    
    if (
      refs.libraryGallery.children.length === 1 &&
      refs.libraryGallery.children[0].nodeName !== 'DIV'
    ) {
      siteConfigs.decrementQueuePage();
     
    }
      paginationMarkup(
        Math.ceil(queueMovieIds.length / siteConfigs.perPage),
        siteConfigs.queuePage
      );
    if (queueMovieIds.length <= 20)refs.pagination.classList.add('pagination--off');
      
    queueTabClickHandler();
  }
  
}

export default {
  setLibraryEventListeners,
  appendGalleryMarkup,
  appendMovieMarkup,
  renderEmptyLibrary,
  scrollToTop,
};
