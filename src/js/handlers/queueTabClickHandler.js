import refs from '../refs/refs';

export const queueTabClickHandler = event => {
  refs.queueTab.classList.add('tabs__btn--current');
  refs.watchedTab.classList.remove('tabs__btn--current');
};
