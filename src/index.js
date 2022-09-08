import ui from './js/ui-interactions';
import notifications from './js/notifications';
import MovieService from './js/MovieService';
import { loadTrendingMovies } from './js/loadTrendingMovies';

export const movieService = new MovieService();

ui.setHomeEventListeners();

initHomePage().catch(error => {
  notifications.failedRequest();
  console.log(error);
  // TODO: handle error of fetching movies in home page
});

async function initHomePage() {
  await movieService.fetchGenresList();
  return loadTrendingMovies();
}

// movieService.searchQuery = 'Time';
// movieService.fetchTrendingMovies().then(data => console.log(data));

// movieService.fetchMovie('370172').then(data => console.log(data));
