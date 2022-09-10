import localStorageService from './local-storage-service';
import keys from './local-storage-keys';

export const modalWatchedBtnClickHandler = event => {
  const movieId = event.target.dataset.id;

  const watchedMoviesIds = localStorageService.load(keys.WATCHED_MOVIES);

  const newWatchedMoviesIds = watchedMoviesIds ? [...watchedMoviesIds] : [];

  if (newWatchedMoviesIds.includes(movieId)) {
    newWatchedMoviesIds.splice(newWatchedMoviesIds.indexOf(movieId), 1);
    event.target.classList.remove('tabs__btn--current');
  } else {
    newWatchedMoviesIds.push(movieId);
    event.target.classList.add('tabs__btn--current');
  }

  localStorageService.save(keys.WATCHED_MOVIES, newWatchedMoviesIds);
};

export const modalQueueBtnClickHandler = event => {
  const movieId = event.target.dataset.id;

  const queueMoviesIds = localStorageService.load(keys.QUEUE_MOVIES);

  const newQueueMoviesIds = queueMoviesIds ? [...queueMoviesIds] : [];

  if (newQueueMoviesIds.includes(movieId)) {
    newQueueMoviesIds.splice(newQueueMoviesIds.indexOf(movieId), 1);
    event.target.classList.remove('tabs__btn--current');
  } else {
    newQueueMoviesIds.push(movieId);
    event.target.classList.add('tabs__btn--current');
  }

  localStorageService.save(keys.QUEUE_MOVIES, newQueueMoviesIds);
};
