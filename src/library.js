import MovieConfigs from './js/MovieConfigs';
import libraryPageUi from './js/ui/library-page-ui';
import notifications from './js/notifications';
import './js/registration-modal';
import { watchedTabClickHandler } from './js/handlers/watchedTabClickHandler';

export const libraryMovieConfigs = new MovieConfigs();

initLibraryPage().catch(error => {
  notifications.failedRequest();
});

async function initLibraryPage() {
  libraryPageUi.setLibraryEventListeners();
  watchedTabClickHandler();
}
