import libraryPageUi from './js/ui/library-page-ui';
import notifications from './js/notifications';
import './js/registration-modal';
import { watchedTabClickHandler } from './js/handlers/watchedTabClickHandler';
import './js/footer-modal';
import { swiper } from './js/swiper-slider';

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
