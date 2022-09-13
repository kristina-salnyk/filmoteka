import { STORAGE_KEYS } from '../constants';
import { dynamicRefs } from '../refs/dynamicRefs';
import { loadDataToStorage } from '../loadDataToStorage';
import { loadDataFromStorage } from '../loadDataFromStorage';
import localStorageService from '../local-storage-service';

export const modalWatchedBtnClickHandler = async event => {
  const movieId = event.target.dataset.id;

  const usersFilmsObj = await loadDataFromStorage('usersFilmsObj');

  const newWatchedMoviesIds =
    usersFilmsObj && usersFilmsObj[STORAGE_KEYS.WATCHED_MOVIES]
      ? [...usersFilmsObj[STORAGE_KEYS.WATCHED_MOVIES]]
      : [];

  const newQueueMoviesIds =
    usersFilmsObj && usersFilmsObj[STORAGE_KEYS.QUEUE_MOVIES]
      ? [...usersFilmsObj[STORAGE_KEYS.QUEUE_MOVIES]]
      : [];

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

    dynamicRefs().queueBtn.classList.add('modal-tabs__btn--current');
    dynamicRefs().queueBtn.textContent = 'add to queue';
  }

  await loadDataToStorage('usersFilmsObj', {
    [STORAGE_KEYS.WATCHED_MOVIES]: newWatchedMoviesIds,
    [STORAGE_KEYS.QUEUE_MOVIES]: newQueueMoviesIds,
  });
};

export const modalQueueBtnClickHandler = async event => {
  const movieId = event.target.dataset.id;

  const usersFilmsObj = await loadDataFromStorage('usersFilmsObj');

  const newWatchedMoviesIds =
    usersFilmsObj && usersFilmsObj[STORAGE_KEYS.WATCHED_MOVIES]
      ? [...usersFilmsObj[STORAGE_KEYS.WATCHED_MOVIES]]
      : [];

  const newQueueMoviesIds =
    usersFilmsObj && usersFilmsObj[STORAGE_KEYS.QUEUE_MOVIES]
      ? [...usersFilmsObj[STORAGE_KEYS.QUEUE_MOVIES]]
      : [];

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

    dynamicRefs().watchedBtn.classList.add('modal-tabs__btn--current');
    dynamicRefs().watchedBtn.textContent = 'add to watched';
  }

  await loadDataToStorage('usersFilmsObj', {
    [STORAGE_KEYS.WATCHED_MOVIES]: newWatchedMoviesIds,
    [STORAGE_KEYS.QUEUE_MOVIES]: newQueueMoviesIds,
  });
};

export const onOpenModal = async movieId => {
  localStorageService.save(STORAGE_KEYS.MODAL_MOVIE, movieId);

  const usersFilmsObj = await loadDataFromStorage('usersFilmsObj');

  if (usersFilmsObj && usersFilmsObj[STORAGE_KEYS.QUEUE_MOVIES]) {
    if (usersFilmsObj[STORAGE_KEYS.QUEUE_MOVIES].includes(String(movieId))) {
      dynamicRefs().queueBtn.classList.remove('modal-tabs__btn--current');
      dynamicRefs().queueBtn.textContent = 'delete from queue';
    }
  }

  if (usersFilmsObj && usersFilmsObj[STORAGE_KEYS.WATCHED_MOVIES]) {
    if (usersFilmsObj[STORAGE_KEYS.WATCHED_MOVIES].includes(String(movieId))) {
      dynamicRefs().watchedBtn.classList.remove('modal-tabs__btn--current');
      dynamicRefs().watchedBtn.textContent = 'delete from watched';
    }
  }
};
