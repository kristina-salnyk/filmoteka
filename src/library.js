import libraryPageUi from './js/ui/library-page-ui';
import notifications from './js/notifications';
import './js/api/firebase/fire-base-service';
import './js/registration-modal';
import './js/load-page-pagination';
import './js/footer-modal';
import './js/swiper-slider';
import './js/theme';
import { onAuthStateChanged } from 'firebase/auth';
import refs from './js/refs/refs';
import { watchedTabClickHandler } from './js/handlers/watchedTabClickHandler';
import { auth } from './js/api/firebase/fire-base-service';
import storage from './js/local-storage-service';
import { STORAGE_KEYS } from './js/constants';
import { queueTabClickHandler } from './js/handlers/queueTabClickHandler';
import { siteConfigs } from './js/SiteConfigs';

onAuthStateChanged(auth, user => {
  if (auth.currentUser) {
    refs.openRegistrationBtn.textContent = 'Log out';
  } else {
    refs.openRegistrationBtn.textContent = 'Log in';
  }

  if (storage.load(STORAGE_KEYS.LAST_FETCH) === 'QUEUE')
    queueTabClickHandler().catch(error => {
      notifications.failedRequest();
      return;
    });

  watchedTabClickHandler().catch(error => {
    notifications.failedRequest();
  });
});

initLibraryPage().catch(error => {
  notifications.failedRequest();
});

async function initLibraryPage() {
  storage.save(STORAGE_KEYS.LAST_FETCH, 'WATCHED');

  libraryPageUi.setLibraryEventListeners();

  setTimeout(() => {
    if (!auth.currentUser)
      watchedTabClickHandler().catch(error => {
        notifications.failedRequest();
      });
  }, 2000);
}
