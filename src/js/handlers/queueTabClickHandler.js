import refs from '../refs/refs';
import storage from '../local-storage/local-storage-service';
import key from '../local-storage/local-storage-keys';
import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { movieConfigs } from '../../index';
import libraryPageUi from '../ui/library-page-ui';

export const queueTabClickHandler = event => {
  refs.queueTab.classList.add('tabs__btn--current');
  refs.watchedTab.classList.remove('tabs__btn--current');
  const queueMovieIds = storage.load(key.QUEUE_MOVIES);
  console.log(queueMovieIds);
  processMovieIds(queueMovieIds).then(data => {
    const test = {
      results: data,
      total_pages: data.length / 20,
      total_results: data.length,
    };
    renderLibraryMoviesData(test);
  });
};

const processMovieIds = ids => {
  const movieRequests = ids.map(id => fetchMovieById(id));
  const result = Promise.all(movieRequests);
  return result;
};

const renderLibraryMoviesData = data => {
  const {
    results: movies,
    total_pages: totalPages,
    total_results: totalResults,
  } = data;

  // paginationMarkup(totalPages, movieConfigs.page);

  const moviesData = movies.map(item => {
    const newItem = { ...item };
    newItem.genres = item['genre_ids']
      .map(id => movieConfigs.getGenreById(id))
      .join(', ');
    const releaseDate = new Date(item['release_date']);
    newItem.year = releaseDate.getFullYear();
    newItem.vote = item['vote_average'].toFixed(1);
    return newItem;
  });

  libraryPageUi.appendGalleryMarkup(moviesData);
};
