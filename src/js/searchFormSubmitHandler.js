import refs from './refs';
import { movieService } from '../index';
import { renderMoviesData } from './renderMoviesData';

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
  renderMoviesData(data);
};
