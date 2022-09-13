import localStorageService from '../local-storage/local-storage-service';
import keys from '../local-storage/local-storage-keys';
import { dynamicRefs } from '../refs/dynamicRefs';

export const modalWatchedBtnClickHandler = event => {
  const movieId = event.target.dataset.id;

  const watchedMoviesIds = localStorageService.load(keys.WATCHED_MOVIES);
  const queueMoviesIds = localStorageService.load(keys.QUEUE_MOVIES);

  const newWatchedMoviesIds = watchedMoviesIds ? [...watchedMoviesIds] : [];
  const newQueueMoviesIds = queueMoviesIds ? [...queueMoviesIds] : [];

  if (newWatchedMoviesIds.includes(movieId)) {
    newWatchedMoviesIds.splice(newWatchedMoviesIds.indexOf(movieId), 1);
    event.target.classList.add('modal-tabs__btn--current');
    event.target.textContent = 'add to watched';
  } else {
    newWatchedMoviesIds.unshift(movieId);
    event.target.classList.remove('modal-tabs__btn--current');
    event.target.textContent = 'delete from watched';
  }

  if (newQueueMoviesIds.includes(movieId)) {
    newQueueMoviesIds.splice(newQueueMoviesIds.indexOf(movieId), 1);
    localStorageService.save(keys.QUEUE_MOVIES, newQueueMoviesIds);

    dynamicRefs().queueBtn.classList.add('modal-tabs__btn--current');
    dynamicRefs().queueBtn.textContent = 'add to queue';
  }

  localStorageService.save(keys.WATCHED_MOVIES, newWatchedMoviesIds);
};

export const modalQueueBtnClickHandler = event => {
  const movieId = event.target.dataset.id;

  const queueMoviesIds = localStorageService.load(keys.QUEUE_MOVIES);
  const watchedMoviesIds = localStorageService.load(keys.WATCHED_MOVIES);

  const newQueueMoviesIds = queueMoviesIds ? [...queueMoviesIds] : [];
  const newWatchedMoviesIds = watchedMoviesIds ? [...watchedMoviesIds] : [];

  if (newQueueMoviesIds.includes(movieId)) {
    newQueueMoviesIds.splice(newQueueMoviesIds.indexOf(movieId), 1);
    event.target.classList.add('modal-tabs__btn--current');
    event.target.textContent = 'add to queue';
  } else {
    newQueueMoviesIds.unshift(movieId);
    event.target.classList.remove('modal-tabs__btn--current');
    event.target.textContent = 'delete from queue';
  }
  if (newWatchedMoviesIds.includes(movieId)) {
    newWatchedMoviesIds.splice(newWatchedMoviesIds.indexOf(movieId), 1);
    localStorageService.save(keys.WATCHED_MOVIES, newWatchedMoviesIds);
    dynamicRefs().watchedBtn.classList.add('modal-tabs__btn--current');
    dynamicRefs().watchedBtn.textContent = 'add to watched';
  }

  localStorageService.save(keys.QUEUE_MOVIES, newQueueMoviesIds);
};

export const onOpenModal = movieId => {
  const queueMoviesIds = localStorageService.load(keys.QUEUE_MOVIES);
  if (queueMoviesIds) {
    if (queueMoviesIds.includes(String(movieId))) {
      dynamicRefs().queueBtn.classList.remove('modal-tabs__btn--current');
      dynamicRefs().queueBtn.textContent = 'delete from queue';
    }
  }

  const watchedMoviesIds = localStorageService.load(keys.WATCHED_MOVIES);
  if (watchedMoviesIds) {
    if (watchedMoviesIds.includes(String(movieId))) {
      dynamicRefs().watchedBtn.classList.remove('modal-tabs__btn--current');
      dynamicRefs().watchedBtn.textContent = 'delete from watched';
    }
  }
};
