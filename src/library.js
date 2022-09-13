import libraryPageUi from './js/ui/library-page-ui';
import notifications from './js/notifications';
import './js/api/firebase/fire-base-service';
import './js/registration-modal';
import './js/load-page-pagination';
import { onAuthStateChanged } from 'firebase/auth';
import { watchedTabClickHandler } from './js/handlers/watchedTabClickHandler';
import './js/footer-modal';
import './js/swiper-slider';
import { auth } from './js/api/firebase/fire-base-service';

onAuthStateChanged(auth, user => {
  watchedTabClickHandler().catch(error => {
    notifications.failedRequest();
  });
});

initLibraryPage().catch(error => {
  notifications.failedRequest();
});

async function initLibraryPage() {
  libraryPageUi.setLibraryEventListeners();
}
