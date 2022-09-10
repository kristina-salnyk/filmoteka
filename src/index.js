import MovieConfigs from './js/MovieConfigs';
import homePageUi from './js/ui/home-page-ui';
import notifications from './js/notifications';
import { fetchGenresList } from './js/api/movie-api/fetchGenresList';
import { fetchTrendingMovies } from './js/api/movie-api/fetchTrendingMovies';
import { renderMoviesData } from './js/render/renderMoviesData';
import './js/footer-modal';
import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export const movieConfigs = new MovieConfigs();

initHomePage().catch(error => {
  notifications.failedRequest();
});

async function initHomePage() {
  homePageUi.setHomeEventListeners();

  try {
    const genresData = await fetchGenresList();
    const { genres } = genresData;
    movieConfigs.genres = genres;

    const trendingData = await fetchTrendingMovies();
    renderMoviesData(trendingData);
  } catch (error) {
    notifications.failedRequest();
  }
}
