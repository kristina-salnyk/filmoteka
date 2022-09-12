import libraryPageUi from './js/ui/library-page-ui';
import notifications from './js/notifications';
import './js/registration-modal';
import { watchedTabClickHandler } from './js/handlers/watchedTabClickHandler';

initLibraryPage().catch(error => {
  notifications.failedRequest();
});

async function initLibraryPage() {
  libraryPageUi.setLibraryEventListeners();

  try {
    await watchedTabClickHandler();
  } catch (error) {
    notifications.failedRequest();
  }
}
