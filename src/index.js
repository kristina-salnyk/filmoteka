import MovieService from './js/MovieService';
import homePageUi from './js/ui/home-page-ui';
import notifications from './js/notifications';
import { loadTrendingMovies } from './js/loadTrendingMovies';
// import './js/footer-modal';
import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export const movieService = new MovieService();

initHomePage().catch(error => {
  notifications.failedRequest();
});

async function initHomePage() {
  homePageUi.setHomeEventListeners();

  await movieService.fetchGenresList();
  return loadTrendingMovies();
}
