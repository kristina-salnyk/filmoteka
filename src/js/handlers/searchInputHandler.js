import refs from '../refs/refs';
import { siteConfigs } from '../SiteConfigs';
import { spinner } from '../spinner';
import { fetchSearchMovie } from '../api/movie-api/fetchSearchMovie';
import { renderMoviesData } from '../render/renderMoviesData';

export const searchInputHandler = async event => {
  const searchQuery = event.target.value.trim();

  refs.searchError.style.display = 'none';
  refs.searchResults.innerHTML = '';

  if (!searchQuery) {
    refs.searchError.style.display = 'block';
    return;
  }

  siteConfigs.setSearchQuery(searchQuery);

  try {
    spinner.spin(refs.homeGallery);
    const searchData = await fetchSearchMovie();
    spinner.stop();

    renderSearchResults(searchData);

    renderMoviesData(searchData);
  } catch (error) {
    refs.searchError.style.display = 'block';
  }
};

const renderSearchResults = data => {
  const { results: movies, total_results: totalResults } = data;

  if (totalResults === 0) {
    return;
  }

  const topResults = movies.slice(0, 5);
  const searchResults = topResults.map(movie => {
    return `${movie.title}`;
  });

  appendSearchResults(searchResults);
};

const appendSearchResults = data => {
  refs.searchResults.innerHTML = data
    .map(item => `<option value="${item}">${item}</option>`)
    .join('');
};
