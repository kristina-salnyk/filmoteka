import refs from '../refs/refs';

export const trackScroll = () => {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    refs.goTopBtn.classList.add('back-to-top_show');
  }
  if (scrolled < coords) {
    refs.goTopBtn.classList.remove('back-to-top_show');
  }
};

export const backToTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
