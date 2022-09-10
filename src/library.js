import MovieConfigs from './js/MovieConfigs';
import libraryPageUi from './js/ui/library-page-ui';
import notifications from './js/notifications';

export const movieConfigs = new MovieConfigs();

initLibraryPage().catch(error => {
  notifications.failedRequest();
});

async function initLibraryPage() {
  libraryPageUi.setLibraryEventListeners();
}
