import refs from './refs';
import example from '../templates/movie-card.hbs';

const setCurrentPage = () => {
  const pagePath = document.location.pathname;
  if (!pagePath.includes('.html')) return;

  const lastPageRef = refs.pages.querySelector('.pages__link--current');
  const currentPageRef = refs.pages.querySelector(
    `.pages__link[href$='${pagePath}']`
  );

  if (lastPageRef) {
    if (lastPageRef === currentPageRef) return;
    lastPageRef.classList.remove('pages__link--current');
  }

  currentPageRef.classList.add('pages__link--current');
};

export default {
  setCurrentPage,
};
