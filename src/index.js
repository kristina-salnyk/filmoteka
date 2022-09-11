import MovieConfigs from './js/MovieConfigs';
import refs from './js/refs/refs';
import homePageUi from './js/ui/home-page-ui';
import notifications from './js/notifications';
import { fetchGenresList } from './js/api/movie-api/fetchGenresList';
import { fetchTrendingMovies } from './js/api/movie-api/fetchTrendingMovies';
import { renderMoviesData } from './js/render/renderMoviesData';
import './js/footer-modal';
import './js/loadPagePagination';
import { Spinner } from 'spin.js';
import 'spin.js/spin.css';
import spinnerConfigs from './js/spinnerConfig.js';

export const movieConfigs = new MovieConfigs();

const spinner = new Spinner(spinnerConfigs);

initHomePage().catch(error => {
  notifications.failedRequest();
});

async function initHomePage() {
  homePageUi.setHomeEventListeners();

  try {
    spinner.spin(refs.homeGallery);

    const genresData = await fetchGenresList();
    const { genres } = genresData;
    movieConfigs.genres = genres;

    const trendingData = await fetchTrendingMovies();
    renderMoviesData(trendingData);

    spinner.stop();
  } catch (error) {
    notifications.failedRequest();
  }
}
