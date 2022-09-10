import localStorageService from './local-storage-service';
import keys from './local-storage-keys';
import { dynamicRefs } from './dynamicRefs';

export const modalWatchedBtnClickHandler = event => {
  const movieId = event.target.dataset.id;

  const watchedMoviesIds = localStorageService.load(keys.WATCHED_MOVIES);

  const newWatchedMoviesIds = watchedMoviesIds ? [...watchedMoviesIds] : [];

  if (newWatchedMoviesIds.includes(movieId)) {
    newWatchedMoviesIds.splice(newWatchedMoviesIds.indexOf(movieId), 1);
    event.target.classList.remove('modal-tabs__watched--current');
    event.target.textContent = 'add to watched';
  } else {
    newWatchedMoviesIds.push(movieId);
    event.target.classList.add('modal-tabs__watched--current');
    event.target.textContent = 'delete from watched';
  }

  localStorageService.save(keys.WATCHED_MOVIES, newWatchedMoviesIds);
};

export const modalQueueBtnClickHandler = event => {
  const movieId = event.target.dataset.id;

  const queueMoviesIds = localStorageService.load(keys.QUEUE_MOVIES);

  const newQueueMoviesIds = queueMoviesIds ? [...queueMoviesIds] : [];

  if (newQueueMoviesIds.includes(movieId)) {
    newQueueMoviesIds.splice(newQueueMoviesIds.indexOf(movieId), 1);
    event.target.classList.remove('modal-tabs__queue--current');
    event.target.textContent = 'add to queue';
  } else {
    newQueueMoviesIds.push(movieId);
    event.target.classList.add('modal-tabs__queue--current');
    event.target.textContent = 'delete from queue';
  }

  localStorageService.save(keys.QUEUE_MOVIES, newQueueMoviesIds);
};

export const onOpenModal = movieId => {
  dynamicRefs().watchedBtn.classList.remove('modal-tabs__watched--current');
  const watchedMoviesIds = localStorageService.load(keys.WATCHED_MOVIES);
  if (watchedMoviesIds) {
    if (watchedMoviesIds.includes(String(movieId))) {
      dynamicRefs().watchedBtn.classList.remove('modal-tabs__watched--current');
      dynamicRefs().watchedBtn.textContent = 'delete from watched';
    }
  }
  const queueMoviesIds = localStorageService.load(keys.QUEUE_MOVIES);
  dynamicRefs().queueBtn.classList.remove('modal-tabs__queue--current');
  if (queueMoviesIds) {
    if (queueMoviesIds.includes(String(movieId))) {
      dynamicRefs().queueBtn.classList.remove('modal-tabs__queue--current');
      dynamicRefs().queueBtn.textContent = 'delete from queue';
    }
  }
};
