import { siteConfigs } from '../SiteConfigs';
import refs from '../refs/refs';
import { fetchSearchMovie } from '../api/movie-api/fetchSearchMovie';
import { renderMoviesData } from '../render/renderMoviesData';
import { spinner } from '../spinner';

export const searchFormSubmitHandler = async event => {
  event.preventDefault();

  refs.searchError.style.display = 'none';

  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  if (!searchQuery) {
    refs.searchError.style.display = 'block';
    return;
  }

  siteConfigs.setSearchQuery(searchQuery);

  try {
    spinner.spin(refs.homeGallery);
    const searchData = await fetchSearchMovie();
    spinner.stop();

    renderMoviesData(searchData);
  } catch (error) {
    refs.searchError.style.display = 'block';
  }
};
