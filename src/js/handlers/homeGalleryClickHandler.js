import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { renderOneMovieData } from '../render/renderOneMovieData';
import notifications from '../notifications';
import homePageUi from '../ui/home-page-ui';

export const homeGalleryClickHandler = async event => {
  event.preventDefault();

  const movieId = event.target.closest('a').dataset.id;

  try {
    const movieData = await fetchMovieById(movieId);
    renderOneMovieData(movieData, homePageUi.appendMovieMarkup);
  } catch (error) {
    notifications.failedRequest();
  }
};
