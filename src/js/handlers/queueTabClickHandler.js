import refs from '../refs/refs';
import storage from '../local-storage/local-storage-service';
import key from '../local-storage/local-storage-keys';
import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { libraryMovieConfigs } from '../../library';
import libraryPageUi from '../ui/library-page-ui';
import paginationMarkup from '../pagination';

export const queueTabClickHandler = event => {
  refs.queueTab.classList.add('tabs__btn--current');
  refs.watchedTab.classList.remove('tabs__btn--current');
  refs.libraryGallery.innerHTML = '';
  const queueMovieIds = storage.load(key.QUEUE_MOVIES);
  console.log(queueMovieIds);
  if (
    localStorage.getItem(key.QUEUE_MOVIES) === null ||
    JSON.parse(localStorage.getItem(key.QUEUE_MOVIES)) === 0
  )
    return refs.libraryGallery.insertAdjacentHTML(
      'afterbegin',
      '<p class="empty-page__text"> Nothing to see here<br>Add a movie please</p>'
    );
  processMovieIds(queueMovieIds).then(data => {
    renderLibraryMoviesData(data);
  });
};

const processMovieIds = ids => {
  const movieRequests = ids.map(id => fetchMovieById(id));
  const result = Promise.all(movieRequests);
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
