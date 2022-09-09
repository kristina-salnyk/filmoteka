import { movieService } from '../index.js';
import ui from '../js/ui-interactions';
import notifications from './notifications';
import modalActions from './modal-film-card';

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
    //закриття і відкриття модалки, в якій буде div із классом "movie-data" //
    ui.appendMovieMarkup(movie);
  } catch (error) {
    notifications.showCustomMessage('ДОБАВЬТЕ МОДАЛКУ');
    return;
  }
};
