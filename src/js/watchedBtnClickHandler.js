import refs from './refs';

export const watchedBtnClickHandler = event => {
  refs.watchedBtn.classList.add('tabs__btn--current');
  refs.queueBtn.classList.remove('tabs__btn--current');
};
