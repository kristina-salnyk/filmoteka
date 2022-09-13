import refs from '../refs/refs';
import storage from '../local-storage-service';
import { STORAGE_KEYS } from '../constants';
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

  const usersFilmsObj = await loadDataFromStorage('usersFilmsObj');
  const queueMovieIds = usersFilmsObj
    ? usersFilmsObj[STORAGE_KEYS.QUEUE_MOVIES]
    : usersFilmsObj;

  if (!queueMovieIds || queueMovieIds.length === 0)
    return libraryPageUi.renderEmptyLibrary();

  processMovieIds(queueMovieIds).then(data => {
    renderLibraryMoviesData(data);
    paginationMarkup(
      Math.ceil(queueMovieIds.length / siteConfigs.perPage),
      siteConfigs.queuePage
    );
  });
};

const processMovieIds = ids => {
  spinner.spin(refs.libraryGallery);
  const movieRequests = ids.map(id => fetchMovieById(id));
  const result = Promise.all(movieRequests);
  spinner.stop();
  storage.save(STORAGE_KEYS.LAST_FETCH, 'QUEUE');

  return result;
};

const renderLibraryMoviesData = movies => {
  let renderMovies = [];

  if (siteConfigs.queuePage === 1)
    renderMovies = movies.slice(0, siteConfigs.perPage);

  if (siteConfigs.queuePage > 1)
    renderMovies = movies.slice(
      siteConfigs.queuePage * siteConfigs.perPage - siteConfigs.perPage,
      siteConfigs.queuePage * siteConfigs.perPage
    );
  const moviesData = renderMovies.map(item => {
    const newItem = { ...item };
    newItem.genres = item.genres.map(genre => genre.name).join(', ');
    const releaseDate = new Date(item['release_date']);
    newItem.year = releaseDate.getFullYear();
    newItem.vote = item['vote_average'].toFixed(1);
    return newItem;
  });

  libraryPageUi.appendGalleryMarkup(moviesData);
};
