document.querySelector('.themetoggle').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkClassToHTML()
});

export function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('.themetoggle span').textContent = 'dark_mode';
      document.querySelector('main').classList.add('dark');
      document.querySelector('body').classList.add('dark');
      document.querySelector('.modal__film').classList.add('dark');
      document.querySelector('.footer').classList.add('dark');
      document.querySelector('.footer-modal').classList.add('dark');
      document.querySelector('.footer-modal__icon-close').classList.add('dark');
      document.querySelector('.copy-rights__btn').classList.add('dark');
      document.querySelectorAll('.pagination__arrow').forEach(el => el.classList.add('dark'));
      document.querySelectorAll('.pagination__button').forEach(el => el.classList.add('dark'));
      document.querySelectorAll('.movie-card__info').forEach(el => el.classList.add('dark'));
      document.querySelector('.pagination__button--active').classList.remove('dark');
      
    }
    else {
      document.querySelector('.themetoggle span').textContent = 'wb_sunny';
      document.querySelector('main').classList.remove('dark');
      document.querySelector('body').classList.remove('dark');
      document.querySelector('.modal__film').classList.remove('dark');
      document.querySelector('.footer').classList.remove('dark');
      document.querySelector('.footer-modal').classList.remove('dark');
      document.querySelector('.footer-modal__icon-close').classList.remove('dark');
      document.querySelector('.copy-rights__btn').classList.remove('dark');
      document.querySelectorAll('.pagination__arrow').forEach(el => el.classList.remove('dark'))
      document.querySelectorAll('.pagination__button').forEach(el => el.classList.remove('dark'))
      document.querySelectorAll('.movie-card__info').forEach(el => el.classList.remove('dark'))
    }
  } catch (err) { }
}

addDarkClassToHTML();