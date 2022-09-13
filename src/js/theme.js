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

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('main').classList.add('dark');
      document.querySelector('.modal__film').classList.add('dark');
      document.querySelector('.footer').classList.add('dark');
      document.querySelector('.themetoggle span').textContent = 'dark_mode';
    }
    else {
      document.querySelector('main').classList.remove('dark');
      document.querySelector('main').classList.remove('dark');
      document.querySelector('.modal__film').classList.remove('dark');
      document.querySelector('.footer').classList.remove('dark');
      document.querySelector('.themetoggle span').textContent = 'wb_sunny';
    }
  } catch (err) { }
}

addDarkClassToHTML();