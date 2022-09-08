import ui from './js/ui-interactions';
import './js/pagination';
import notifications from './js/notifications';
import MovieService from './js/MovieService';

ui.setHomeEventListeners();

 const movieService = new MovieService();

loadTrendingMovies().catch(error => {
  notifications.failedRequest();
  console.log(error);
  // TODO: handle error of fetching movies in home page
});

 async function loadTrendingMovies() {
  await movieService.fetchGenresList();
  const data = await movieService.fetchTrendingMovies();
  
  const {
    results: movies,
    total_pages: totalPages,
    total_results: totalResults,
  } = data;
  
  if (totalResults === 0) {
    notifications.notFoundResults();
    return;
  }
  
  const moviesData = movies.map(item => {
    const newItem = { ...item };
    newItem.genres = item.genre_ids
    .map(id => movieService.getGenreById(id))
    .join(', ');
    const releaseDate = new Date(item.release_date);
    newItem.year = releaseDate.getFullYear();
    return newItem;
  });
  
  ui.appendGalleryMarkup(moviesData);
}

// movieService.searchQuery = 'Time';
// movieService.fetchTrendingMovies().then(data => console.log(data));

// movieService.fetchMovie('370172').then(data => console.log(data));
