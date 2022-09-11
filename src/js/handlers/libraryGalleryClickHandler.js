import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { renderOneMovieData } from '../render/renderOneMovieData';
import notifications from '../notifications';
import libraryPageUi from '../ui/library-page-ui';

export const libraryGalleryClickHandler = async event => {
  event.preventDefault();

  const movieId = event.target.closest('a').dataset.id;

  try {
    const movieData = await fetchMovieById(movieId);
    renderOneMovieData(movieData, libraryPageUi.appendMovieMarkup);
  } catch (error) {
    notifications.failedRequest();
  }
};
