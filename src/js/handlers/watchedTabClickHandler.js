import refs from '../refs/refs';
import storage from '../local-storage/local-storage-service';
import key from '../local-storage/local-storage-keys';
import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import libraryPageUi from '../ui/library-page-ui';
import paginationMarkup from '../pagination';
import { loadDataFromStorage } from '../loadDataFromStorage';
import { spinner } from '../spinner';
import { siteConfigs } from '../SiteConfigs';

export const watchedTabClickHandler = async event => {
  console.log(1);
  refs.watchedTab.classList.add('tabs__btn--current');
  refs.queueTab.classList.remove('tabs__btn--current');

  refs.libraryGallery.innerHTML = '';

  const watchedMovieIds = await loadDataFromStorage(key.WATCHED_MOVIES);

  if (!watchedMovieIds || watchedMovieIds.length === 0)
    return libraryPageUi.renderEmptyLibrary();

  processMovieIds(watchedMovieIds).then(data => {
    renderLibraryMoviesData(data);
  });
};

const processMovieIds = async ids => {
  spinner.spin(refs.libraryGallery);
  const movieRequests = ids.map(id => fetchMovieById(id));
  const result = await Promise.all(movieRequests);
  spinner.stop();
  return result;
};

const renderLibraryMoviesData = movies => {
  paginationMarkup(Math.ceil(movies.length / 20), siteConfigs.page);

  const moviesData = movies.map(item => {
    const newItem = { ...item };
    newItem.genres = item.genres.map(genre => genre.name).join(', ');
    const releaseDate = new Date(item['release_date']);
    newItem.year = releaseDate.getFullYear();
    newItem.vote = item['vote_average'].toFixed(1);
    return newItem;
  });

  libraryPageUi.appendGalleryMarkup(moviesData);
};
