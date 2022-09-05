import refs from './refs';
import { watchedBtnClickHandler } from './watchedBtnClickHandler';
import { queueBtnClickHandler } from './queueBtnClickHandler';
import { searchFormSubmitHandler } from './searchFormSubmitHandler';
import example from '../templates/movie-card.hbs';

const setHomeEventListeners = () => {
  refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
};

const setLibraryEventListeners = () => {
  refs.watchedBtn.addEventListener('click', watchedBtnClickHandler);
  refs.queueBtn.addEventListener('click', queueBtnClickHandler);
};

export default {
  setHomeEventListeners,
  setLibraryEventListeners,
};
