import refs from './refs';

export const queueBtnClickHandler = event => {
  refs.queueBtn.classList.add('tabs__btn--current');
  refs.watchedBtn.classList.remove('tabs__btn--current');
};
