import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { renderOneMovieData } from '../render/renderOneMovieData';
import notifications from '../notifications';
import libraryPageUi from '../ui/library-page-ui';
import { spinner } from '../spinner';
import refs from '../refs/refs';

export const libraryGalleryClickHandler = async event => {
  event.preventDefault();
  if (
    event.target.nodeName !== 'IMG' &&
    event.target.nodeName !== 'H2' &&
    event.target.nodeName !== 'SPAN'
  ) {
    return;
  }

  const movieId = event.target.closest('a').dataset.id;

  try {
    spinner.spin(refs.libraryGallery);
    const movieData = await fetchMovieById(movieId);
    spinner.stop();
    renderOneMovieData(movieData, libraryPageUi.appendMovieMarkup);
  } catch (error) {
    notifications.failedRequest();
  }
};
