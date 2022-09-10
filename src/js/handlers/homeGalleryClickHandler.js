import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { renderOneMovieData } from '../render/renderOneMovieData';
import notifications from '../notifications';

export const homeGalleryClickHandler = async event => {
  event.preventDefault();

  const movieId = event.target.closest('a').dataset.id;

  try {
    const movieData = await fetchMovieById(movieId);
    renderOneMovieData(movieData);
  } catch (error) {
    notifications.failedRequest();
  }
};
