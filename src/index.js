import { siteConfigs } from './js/SiteConfigs';
import homePageUi from './js/ui/home-page-ui';
import notifications from './js/notifications';
import './js/api/firebase/fire-base-service';
import { fetchGenresList } from './js/api/movie-api/fetchGenresList';
import { fetchTrendingMovies } from './js/api/movie-api/fetchTrendingMovies';
import { renderMoviesData } from './js/render/renderMoviesData';
import './js/footer-modal';
import './js/registration-modal';
import './js/load-page-pagination';
import './js/theme';
import { spinner } from './js/spinner';
import refs from './js/refs/refs';
import './js/swiper-slider';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './js/api/firebase/fire-base-service';

onAuthStateChanged(auth, user => {
  if (auth.currentUser) {
    refs.openRegistrationBtn.textContent = 'Log out';
  } else {
    refs.openRegistrationBtn.textContent = 'Log in';
  }
});

initHomePage().catch(error => {
  notifications.failedRequest();
});

async function initHomePage() {
  homePageUi.setHomeEventListeners();

  try {
    spinner.spin(refs.homeGallery);
    const genresData = await fetchGenresList();
    const { genres } = genresData;
    siteConfigs.genres = genres;

    const trendingData = await fetchTrendingMovies();
    spinner.stop();
    renderMoviesData(trendingData);
  } catch (error) {
    notifications.failedRequest();
  }
}
