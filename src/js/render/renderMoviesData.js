import { homeConfigs } from '../HomeConfigs';
import refs from '../refs/refs';
import homePageUi from '../ui/home-page-ui';
import paginationMarkup from '../pagination';

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

  paginationMarkup(totalPages, homeConfigs.page);

  const moviesData = movies.map(item => {
    const newItem = { ...item };
    newItem.genres = item['genre_ids']
      .map(id => homeConfigs.getGenreById(id))
      .join(', ');
    const releaseDate = new Date(item['release_date']);
    newItem.year = releaseDate.getFullYear();
    newItem.vote = item['vote_average'].toFixed(1);
    return newItem;
  });

  homePageUi.appendGalleryMarkup(moviesData);
};
