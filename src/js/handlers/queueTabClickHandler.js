import refs from '../refs/refs';
import storage from '../local-storage/local-storage-service';
import key from '../local-storage/local-storage-keys';
import { fetchMovieById } from '../api/movie-api/fetchMovieById';
import { renderMovieData } from '../render/renderMoviesData';

export const queueTabClickHandler = event => {
  refs.queueTab.classList.add('tabs__btn--current');
  refs.watchedTab.classList.remove('tabs__btn--current');
  const queueMovieIds = storage.load(key.QUEUE_MOVIES);
  console.log(queueMovieIds);
  proccesMovieIds(queueMovieIds).then(data => {
    const test = { results: data, total_pages: data.length/20, total_results: data.length };
    renderMovieData(test);
  });
};

const proccesMovieIds = ids => {
  const movieRequests = ids.map(id => fetchMovieById(id));
  const result = Promise.all(movieRequests);
  return result;
};
