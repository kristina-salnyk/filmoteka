import refs from '../refs/refs';
import storage from '../local-storage/local-storage-service';
import key from '../local-storage/local-storage-keys';
import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { libraryMovieConfigs } from '../../library';
import libraryPageUi from '../ui/library-page-ui';
import paginationMarkup from '../pagination';
// import { Spinner } from 'spin.js';
// import 'spin.js/spin.css';
// import spinnerConfigs from '../spinner';


const spinner = new Spinner(spinnerConfigs);

export const watchedTabClickHandler = event => {
  refs.watchedTab.classList.add('tabs__btn--current');
  refs.queueTab.classList.remove('tabs__btn--current');
  refs.libraryGallery.innerHTML = '';
  const watchedMovieIds = storage.load(key.WATCHED_MOVIES);
  console.log(watchedMovieIds);
    processMovieIds(watchedMovieIds).then(data => {
      const test = {
        results: data
      };
      renderLibraryMoviesData(test);
    });
    
    
};

const processMovieIds = async ( ids )=> {
  const movieRequests = ids.map(id => fetchMovieById(id));
  const result = await Promise.all(movieRequests);
  return result;
};
const renderLibraryMoviesData = data => {
  const {
    results: movies,
    total_pages: totalPages,
    total_results: totalResults,
  } = data;

  paginationMarkup(totalPages, libraryMovieConfigs.page);

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