import { movieService } from '../index';
import notifications from './notifications';
import ui from './ui-interactions';
import paginationMarup from './pagination';

export async function loadTrendingMovies() {
  const data = await movieService.fetchTrendingMovies();

  const {
    results: movies,
    total_pages: totalPages,
    total_results: totalResults,
  } = data;
  paginationMarup(totalPages, movieService.getPage());
  
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
    newItem.vote = item.vote_average.toFixed(1);
    return newItem;
  });

  ui.appendGalleryMarkup(moviesData);
}
