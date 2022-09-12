import libraryPageUi from './js/ui/library-page-ui';
import notifications from './js/notifications';
import './js/api/firebase/fireBase';
import './js/registration-modal';
import { watchedTabClickHandler } from './js/handlers/watchedTabClickHandler';

initLibraryPage().catch(error => {
  notifications.failedRequest();
});

async function initLibraryPage() {
  libraryPageUi.setLibraryEventListeners();
}
