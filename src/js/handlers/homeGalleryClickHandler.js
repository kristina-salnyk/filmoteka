import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { renderOneMovieData } from '../render/renderOneMovieData';
import notifications from '../notifications';
// import { Spinner } from 'spin.js';
// import 'spin.js/spin.css';
// import spinnerConfigs from '../spinnerCofigs';

// const spinner = new Spinner(spinnerConfigs);

export const homeGalleryClickHandler = async event => {
  event.preventDefault();

  const movieId = event.target.closest('a').dataset.id;

  try {
    // spinner.spin(refs.homeGallery);
    const movieData = await fetchMovieById(movieId);
    // spinner.stop();
    renderOneMovieData(movieData);
  } catch (error) {
    notifications.failedRequest();
  }
};
