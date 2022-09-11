import refs from '../refs/refs';
import storage from '../local-storage/local-storage-service';
import key from '../local-storage/local-storage-keys';
import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { libraryMovieConfigs } from '../../library';
import libraryPageUi from '../ui/library-page-ui';
import paginationMarkup from '../pagination';

const spinner = new Spinner(spinnerConfigs);

export const watchedTabClickHandler = event => {
  refs.watchedTab.classList.add('tabs__btn--current');
  refs.queueTab.classList.remove('tabs__btn--current');

  refs.libraryGallery.innerHTML = '';

  const watchedMovieIds = storage.load(key.WATCHED_MOVIES);
  
  if (!watchedMovieIds || watchedMovieIds.length === 0)
    return renderEmptyLibrary();
    
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

export default function renderEmptyLibrary() {
  const fillerLibrary =
    '<p class="empty-page__text"> Nothing to see here<br>Add a movie please</p>';
  refs.libraryGallery.insertAdjacentHTML('afterbegin', fillerLibrary);
}
