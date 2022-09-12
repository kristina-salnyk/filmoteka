import refs from '../refs/refs';
import storage from '../local-storage/local-storage-service';
import key from '../local-storage/local-storage-keys';
import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { libraryMovieConfigs } from '../../library';
import libraryPageUi from '../ui/library-page-ui';
import paginationMarkup from '../pagination';
import { loadDataFromStorage } from '../loadDataFromStorage';

export const watchedTabClickHandler = async event => {
  console.log(1);
  refs.watchedTab.classList.add('tabs__btn--current');
  refs.queueTab.classList.remove('tabs__btn--current');

  refs.libraryGallery.innerHTML = '';

  const watchedMovieIds = await loadDataFromStorage(key.WATCHED_MOVIES);

  if (!watchedMovieIds || watchedMovieIds.length === 0)
    return refs.libraryGallery.insertAdjacentHTML(
      'afterbegin',
      '<p class="empty-page__text"> Nothing to see here<br>Add a movie please</p>'
    );

  processMovieIds(watchedMovieIds).then(data => {
    renderLibraryMoviesData(data);
  });
};

const processMovieIds = async ids => {
  const movieRequests = ids.map(id => fetchMovieById(id));
  const result = await Promise.all(movieRequests);
  return result;
};

const renderLibraryMoviesData = movies => {
  paginationMarkup((movies.length / 20).toFixed(), libraryMovieConfigs.page);

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
