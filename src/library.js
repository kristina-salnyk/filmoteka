import MovieConfigs from './js/MovieConfigs';
import libraryPageUi from './js/ui/library-page-ui';
import notifications from './js/notifications';
import { fetchGenresList } from './js/api/movie-api/fetchGenresList';
import {watchedTabClickHandler} from './js/handlers/watchedTabClickHandler';
import refs from './js/refs/refs';

export const libraryMovieConfigs = new MovieConfigs();

initLibraryPage().catch(error => {
  notifications.failedRequest();
});

async function initLibraryPage() {
  libraryPageUi.setLibraryEventListeners();

  try {
    watchedTabClickHandler();

  } catch (error) {
    notifications.failedRequest();
  }
}
