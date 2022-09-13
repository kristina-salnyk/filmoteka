import { onOpenModalBtn } from '../onOpenModalBtn';

export const renderOneMovieData = (data, markupCallback) => {
  const movieGenres = data.genres.map(genre => genre.name).join(', ');
  const vote = data['vote_average'].toFixed(1);
  const popularity = data.popularity.toFixed(1);

  const movie = {
    title: data.title,
    originalTitle: data['original_title'],
    vote,
    votes: data['vote_count'],
    popularity,
    overview: data.overview,
    movieGenres,
    posterPath: data['poster_path'],
    id: data.id,
  };

  onOpenModalBtn();
  markupCallback(movie);
};
