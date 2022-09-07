import ui from './js/ui-interactions';
import MovieService from './js/MovieService';

ui.setHomeEventListeners();

const movieService = new MovieService();
// movieService.fetchTrendingMovies().then(data => console.log(data));

// movieService.searchQuery = 'Time';
// movieService.fetchTrendingMovies().then(data => console.log(data));

// movieService.fetchMovie('370172').then(data => console.log(data));
