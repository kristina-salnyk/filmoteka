import refs from '../refs/refs';
import storage from '../local-storage/local-storage-service';
import key from '../local-storage/local-storage-keys';
import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { siteConfigs } from '../SiteConfigs';
import libraryPageUi from '../ui/library-page-ui';
import paginationMarkup from '../pagination';
import { loadDataFromStorage } from '../loadDataFromStorage';
import { spinner } from '../spinner';

export const queueTabClickHandler = async event => {
  refs.queueTab.classList.add('tabs__btn--current');
  refs.watchedTab.classList.remove('tabs__btn--current');

  refs.libraryGallery.innerHTML = '';

  const queueMovieIds = await loadDataFromStorage(key.QUEUE_MOVIES);

  if (!queueMovieIds || queueMovieIds.length === 0)
    return libraryPageUi.renderEmptyLibrary();

  processMovieIds(queueMovieIds).then(data => {
    renderLibraryMoviesData(data);
  });
};

const processMovieIds = ids => {
  spinner.spin(refs.libraryGallery);
  const movieRequests = ids.map(id => fetchMovieById(id));
  const result = Promise.all(movieRequests);
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
