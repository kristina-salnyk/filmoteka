import paginationMarup from './pagination';
import { movieService } from '../index';
import ui from './ui-interactions';
import refs from './refs';

export const renderMoviesData = data => {
  const {
    results: movies,
    total_pages: totalPages,
    total_results: totalResults,
  } = data;

  if (totalResults === 0) {
    refs.searchError.style.display = 'block';
    return;
  }

  paginationMarup(totalPages, movieService.getPage());

  const moviesData = movies.map(item => {
    const newItem = { ...item };
    newItem.genres = item['genre_ids']
      .map(id => movieService.getGenreById(id))
      .join(', ');
    const releaseDate = new Date(item['release_date']);
    newItem.year = releaseDate.getFullYear();
    newItem.vote = item['vote_average'].toFixed(1);
    return newItem;
  });

  ui.appendGalleryMarkup(moviesData);
};
