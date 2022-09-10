import refs from '../refs/refs';

export const watchedTabClickHandler = event => {
  refs.watchedTab.classList.add('tabs__btn--current');
  refs.queueTab.classList.remove('tabs__btn--current');
};
