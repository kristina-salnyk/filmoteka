import { movieService } from '../index';
import notifications from './notifications';
import modalActions from './modal-film-card';
import homePageUi from './home-page-ui';

export const oneMovieClickHandler = async event => {
  event.preventDefault();

  const movieId = event.target.closest('a').dataset.id;

  try {
    const data = await movieService.fetchMovie(movieId);

    const movieGenres = data.genres.map(genre => genre.name).join(', ');

    const movie = {
      title: data.title,
      originalTitle: data.original_title,
      vote: data.vote_average,
      votes: data.vote_count,
      popularity: data.popularity,
      overview: data.overview,
      movieGenres,
      posterPath: data.poster_path,
    };

    modalActions.onOpenModalBtn();

    homePageUi.appendMovieMarkup(movie);
  } catch (error) {
    notifications.failedRequest();
    return;
  }
};
