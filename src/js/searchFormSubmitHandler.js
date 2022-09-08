import refs from './refs';
import { movieService } from '../index';
import ui from './ui-interactions';

export const searchFormSubmitHandler = async event => {
  event.preventDefault();

  refs.searchError.style.display = 'none';

  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  if (!searchQuery) {
    refs.searchError.style.display = 'block';
    return;
  }
  movieService.searchQuery = searchQuery;


    const data = await movieService.fetchSearchedMovie();

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
      newItem.vote = item.vote_average.toFixed(1);
      return newItem;
    });

    ui.scrollToUp();
    ui.appendGalleryMarkup(moviesData);
};
