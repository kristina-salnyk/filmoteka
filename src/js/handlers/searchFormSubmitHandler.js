import { movieConfigs } from '../../index';
import refs from '../refs/refs';
import { fetchSearchMovie } from '../api/movie-api/fetchSearchMovie';
import { renderMoviesData } from '../render/renderMoviesData';

export const searchFormSubmitHandler = async event => {
  event.preventDefault();

  refs.searchError.style.display = 'none';

  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  if (!searchQuery) {
    refs.searchError.style.display = 'block';
    return;
  }

  movieConfigs.setSearchQuery(searchQuery);

  try {
    const searchData = await fetchSearchMovie();
    renderMoviesData(searchData);
  } catch (error) {
    refs.searchError.style.display = 'block';
  }
};
