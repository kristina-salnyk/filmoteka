import { movieService } from '../index.js';
import refs from './refs.js';
import modalMovie from '../templates/modal-for-movie.hbs';
import ui from '../js/ui-interactions';

export const oneMovieClickHandler = async event => {
  const movieId = event.target.closest('a').dataset.id;
  const data = await movieService.fetchMovie(movieId);

  if (data === null) {
    notifications.notFoundResults();
    return;
  }
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

  //закриття і відкриття модалки, в якій буде div із классом "movie-data" //
  ui.appendMovieMarkup(movie);
};
