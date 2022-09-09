import MovieService from './js/MovieService';
import homePageUi from './js/home-page-ui';
import notifications from './js/notifications';
import { loadTrendingMovies } from './js/loadTrendingMovies';

export const movieService = new MovieService();

initHomePage().catch(error => {
  notifications.failedRequest();
});

async function initHomePage() {
  homePageUi.setHomeEventListeners();

  await movieService.fetchGenresList();
  return loadTrendingMovies();
}
