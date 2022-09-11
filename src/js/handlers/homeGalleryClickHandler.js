import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { renderOneMovieData } from '../render/renderOneMovieData';
import notifications from '../notifications';
import homePageUi from '../ui/home-page-ui';
import { spinner } from '../spinner';
import refs from '../refs/refs';

export const homeGalleryClickHandler = async event => {
  event.preventDefault();

  const movieId = event.target.closest('a').dataset.id;

  try {
    spinner.spin(refs.homeGallery);
    const movieData = await fetchMovieById(movieId);
    spinner.stop();
    renderOneMovieData(movieData, homePageUi.appendMovieMarkup);
  } catch (error) {
    notifications.failedRequest();
  }
};
