import MovieService from './js/MovieService';
import libraryPageUi from './js/ui/library-page-ui';
import notifications from './js/notifications';

export const movieService = new MovieService();

initLibraryPage().catch(error => {
  notifications.failedRequest();
});

async function initLibraryPage() {
  libraryPageUi.setLibraryEventListeners();
}
